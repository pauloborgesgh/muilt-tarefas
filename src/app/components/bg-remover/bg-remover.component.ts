import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bg-remover',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule],
  templateUrl: './bg-remover.component.html',
  styleUrls: ['./bg-remover.component.css']
})
export class BgRemoverComponent {
  imageSrc: string | null = null;
  processedUrl: string | null = null;
  tolerance = 60; // color distance threshold
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  constructor(private dialogRef: MatDialogRef<BgRemoverComponent>) {}

  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result as string;
      this.processedUrl = null;
      // small timeout to let img src bind in template
      setTimeout(() => this.drawToCanvas(), 50);
    };
    reader.readAsDataURL(file);
  }

  private drawToCanvas() {
    if (!this.imageSrc) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvasEl = this.canvas.nativeElement;
      canvasEl.width = img.naturalWidth;
      canvasEl.height = img.naturalHeight;
      const ctx = canvasEl.getContext('2d')!;
      ctx.clearRect(0,0,canvasEl.width, canvasEl.height);
      ctx.drawImage(img, 0, 0);
    };
    img.src = this.imageSrc;
  }

  // compute average corner color and remove close colors
  removeBackground() {
    const canvasEl = this.canvas.nativeElement;
    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;
    const w = canvasEl.width;
    const h = canvasEl.height;
    if (w === 0 || h === 0) return;

    const imgData = ctx.getImageData(0,0,w,h);
    const data = imgData.data;

    // sample pixels from four corners (small box)
    const sampleSize = Math.max(1, Math.floor(Math.min(w,h) * 0.02));
    const corners: number[][] = [];
    const sampleBox = (sx:number, sy:number) => {
      let r=0,g=0,b=0,c=0;
      const ex = Math.min(w, sx + sampleSize);
      const ey = Math.min(h, sy + sampleSize);
      for (let y=sy;y<ey;y++){
        for (let x=sx;x<ex;x++){
          const i = (y*w + x)*4;
          r += data[i]; g += data[i+1]; b += data[i+2]; c++;
        }
      }
      return [Math.round(r/c), Math.round(g/c), Math.round(b/c)];
    };

    corners.push(sampleBox(0,0));
    corners.push(sampleBox(w - sampleSize -1,0));
    corners.push(sampleBox(0,h - sampleSize -1));
    corners.push(sampleBox(w - sampleSize -1, h - sampleSize -1));

    // average corner color
    const avg = [0,0,0];
    corners.forEach(c => { avg[0]+=c[0]; avg[1]+=c[1]; avg[2]+=c[2]; });
    avg[0] = Math.round(avg[0]/corners.length);
    avg[1] = Math.round(avg[1]/corners.length);
    avg[2] = Math.round(avg[2]/corners.length);

    // remove pixels close to avg color
    const tol = this.tolerance;
    for (let i=0;i<data.length;i+=4){
      const dr = data[i] - avg[0];
      const dg = data[i+1] - avg[1];
      const db = data[i+2] - avg[2];
      const dist = Math.sqrt(dr*dr + dg*dg + db*db);
      if (dist <= tol) {
        // make transparent
        data[i+3] = 0;
      }
    }

    ctx.putImageData(imgData,0,0);
    // update preview
    this.processedUrl = canvasEl.toDataURL('image/png');
  }

  downloadResult() {
    const url = this.processedUrl || this.canvas?.nativeElement?.toDataURL('image/png');
    if (!url) return;
    const a = document.createElement('a');
    a.href = url as string;
    a.download = 'no-bg.png';
    a.click();
  }

  close() { this.dialogRef.close(); }
}
