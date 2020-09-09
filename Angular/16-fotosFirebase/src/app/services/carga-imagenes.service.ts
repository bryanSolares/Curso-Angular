import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) { }

  private saveImage(imagen: { nombre: string, url: string }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }

  cargarImagenesFirebase(imagenes: FileItem[]) {
    const storageRef = firebase.storage().ref();
    for (const item of imagenes) {
      item.subiendo = true;
      if (item.progreso >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).put(item.archivo);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.log('Error al subir:', error),
        () => {
          console.log('Imagen cargad correctamente');

          uploadTask.snapshot.ref.getDownloadURL()
          .then(url => {
            item.url = url;
            item.subiendo = false;
            this.saveImage({nombre: item.nombreArchivo, url: item.url});
          });

        }
      )
    }
  }

}
