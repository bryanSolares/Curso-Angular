import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this._prevenirDetener(event);
    this.mouseSobre.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {

    const transferencia = this._getTransferencia(event);

    if (!transferencia) {
      return;
    }

    this._extraerArchivos(transferencia.files);
    this._prevenirDetener(event);
    this.mouseSobre.emit(false);
  }

  private _getTransferencia(evento: any) {
    return evento.dataTransfer ? evento.dataTransfer : evento.originalEvent.dataTransfer;
  }

  private _extraerArchivos(archivosLista: FileList) {
    // tslint:disable-next-line: forin
    for (const propiedad in Object.getOwnPropertyNames(archivosLista)){
      const temp = archivosLista[propiedad];
      if (this._archivoPuedeSerCargado(temp)) {
        this.archivos.push(new FileItem(temp));
      }
    }

    console.log(this.archivos);
  }

  // Validaciones
  private _archivoPuedeSerCargado(archivo: File): boolean {
    if (!this._archivoExistente(archivo.name) && this._esImagen(archivo.type)) {
      return true;
    } else {
      return false;
    }
  }

  private _prevenirDetener(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoExistente(nombreArchivo: string): boolean {
    this.archivos.forEach(element => {
      if (element.nombreArchivo === nombreArchivo) {
        console.log('Archivo ya existe: ' + nombreArchivo);
        return true;
      }
    });

    return false;
  }

  private _esImagen(tipoArchivo: string): boolean {
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
  }

}
