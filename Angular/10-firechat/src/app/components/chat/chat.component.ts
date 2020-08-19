import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [],
})
export class ChatComponent implements OnInit {
  mensaje: string = '';
  elemento: any = '';

  constructor(public _chatService: ChatService) {
    this._chatService.cargarMensajes().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje() {
    if (this.mensaje.length == 0) {
      return;
    }

    this._chatService
      .agregarMensaje(this.mensaje)
      .then(() => {
        console.log('Mensaje Enviado');
        this.mensaje = '';
      })
      .catch((e) => console.log('Error al enviar', e));
  }
}
