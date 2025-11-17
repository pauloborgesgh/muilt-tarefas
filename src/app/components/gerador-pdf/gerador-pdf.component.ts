import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';

import jsPDF from 'jspdf';

@Component({
  selector: 'app-gerador-pdf',
  templateUrl: './gerador-pdf.component.html',
  styleUrls: ['./gerador-pdf.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule],
})
export class GeradorPdfComponent {
  imageSrc: string | null = null;
  textToAdd = '';

  constructor(private dialogRef: MatDialogRef<GeradorPdfComponent>) {}

  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => (this.imageSrc = reader.result as string);
    reader.readAsDataURL(file);
  }

  generatePdf() {
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const margin = 40;
    const imageWidth = 120; // px in points
    const imageHeight = 120;

    if (this.imageSrc) {
      try {
        doc.addImage(this.imageSrc, 'PNG', margin, margin, imageWidth, imageHeight);
      } catch (err) {
        // try jpg fallback
        try { doc.addImage(this.imageSrc, 'JPEG', margin, margin, imageWidth, imageHeight); } catch(e) { console.warn('addImage failed', e); }
      }
    }

    if (this.textToAdd) {
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const textX = margin;
      // reserve space below image on first page if image exists
      const firstPageTextY = this.imageSrc ? (margin + imageHeight + 30) : margin;
      const fontSize = 12;
      doc.setFontSize(fontSize);
      const lineHeight = fontSize * 1.2; // approx line height in points

      // split the full text into lines that fit the page width
      const maxTextWidth = pageWidth - margin * 2;
      const lines = doc.splitTextToSize(this.textToAdd, maxTextWidth);

      // compute how many lines fit on the first page (accounting for reserved space)
      const firstPageAvailableHeight = pageHeight - firstPageTextY - margin;
      const linesFirstPage = Math.max(0, Math.floor(firstPageAvailableHeight / lineHeight));

      // lines per subsequent full page
      const fullPageAvailableHeight = pageHeight - margin * 2;
      const linesPerFullPage = Math.max(1, Math.floor(fullPageAvailableHeight / lineHeight));

      let cursor = 0;

      // first page
      if (lines.length > 0) {
        const firstChunk = lines.slice(0, linesFirstPage || linesPerFullPage);
        doc.text(firstChunk, textX, firstPageTextY);
        cursor = firstChunk.length;
      }

      // remaining pages
      while (cursor < lines.length) {
        doc.addPage();
        const chunk = lines.slice(cursor, cursor + linesPerFullPage);
        const yStart = margin;
        doc.text(chunk, textX, yStart);
        cursor += chunk.length;
      }
    }

    doc.save('documento-gerado.pdf');
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
