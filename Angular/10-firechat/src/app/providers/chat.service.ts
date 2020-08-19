import { Injectable } from '@angular/core';
import { Mensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.auth.authState.subscribe((user) => {
      console.log(user);
      if (user) {
        this.usuario.nombre = user.email;
        this.usuario.uid = user.uid;
        this.usuario.photoURL = user.photoURL;
      }
    });
  }

  login(proveedor: string) {
    if (proveedor === 'google') {
      this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } else if (proveedor === 'github') {
      console.log('Github');
      this.auth.signInWithPopup(new auth.GithubAuthProvider());
    }
  }
  logout() {
    this.usuario = {};
    this.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', (ref) =>
      ref.orderBy('fecha', 'asc').limitToLast(20)
    );
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        this.chats = mensajes;
      })
    );
  }

  agregarMensaje(texto: string) {
    console.log(this.usuario);
    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid,
    };

    return this.itemsCollection.add(mensaje);
  }
}
