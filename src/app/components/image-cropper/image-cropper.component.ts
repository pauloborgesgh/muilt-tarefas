import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

// CropperJS
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

@Component({
  selector: 'app-image-cropper',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule],
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit, OnDestroy {
  imageSrc: string | null = null;
  @ViewChild('imageElement') imageElement!: ElementRef<HTMLImageElement>;

  cropper: Cropper | null = null;
  previewUrl: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroyCropper();
    if (this.previewUrl) {
      URL.revokeObjectURL(this.previewUrl);
      this.previewUrl = null;
    }
  }

  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result as string;
      // initialize cropper after image is set
      setTimeout(() => this.initCropper(), 50);
    };
    reader.readAsDataURL(file);
  }

  initCropper() {
    this.destroyCropper();
    const img = this.imageElement?.nativeElement;
    if (!img) return;
    this.cropper = new Cropper(img, {
      viewMode: 1,
      autoCropArea: 0.8,
      movable: true,
      zoomable: true,
      scalable: false,
      responsive: true,
      background: true,
      guides: true,
    });
  }

  destroyCropper() {
    if (this.cropper) {
      this.cropper.destroy();
      this.cropper = null;
    }
  }

  applyCropPreview() {
    if (!this.cropper) return;
    const canvas = this.cropper.getCroppedCanvas();
    if (!canvas) return;
    canvas.toBlob((blob: Blob | null) => {
      if (!blob) return;
      if (this.previewUrl) URL.revokeObjectURL(this.previewUrl);
      this.previewUrl = URL.createObjectURL(blob);
    });
  }

  downloadCropped() {
    if (!this.cropper) return;
    const canvas = this.cropper.getCroppedCanvas();
    if (!canvas) return;
    canvas.toBlob((blob: Blob | null) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'cropped.png';
      a.click();
      URL.revokeObjectURL(url);
    });
  }
}
