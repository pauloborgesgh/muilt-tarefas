import { Component, Output, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { CommonModule } from '@angular/common';
import { GeradorPdfComponent } from '../gerador-pdf/gerador-pdf.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImageCropperComponent } from '../image-cropper/image-cropper.component';
import { BgRemoverComponent } from '../bg-remover/bg-remover.component';

@Component({
  selector: 'app-main',
  imports: [CommonModule, MatDialogModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
})
export class MainComponent implements OnInit {
  @Output() cmain:string = 'main deu certo'


  constructor(private services: ListService, private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openImageCrop(){
    this.dialog.open(ImageCropperComponent, { width: '760px' });
  }

  openGeradorPdf(){
    this.dialog.open(GeradorPdfComponent, { width: '680px' });
  }

  openBgRemove(){
    this.dialog.open(BgRemoverComponent, { width: '820px' });
  }

  openQueries(){
    console.log('Abrir consultas multifunção');
    alert('Consultas: aberto painel de consultas (implementação futura).');
  }

  openConversions(){
    console.log('Abrir conversões');
    alert('Conversões: abra o componente de conversões (já existe em /function).');
  }


}
