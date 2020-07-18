import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  recordarUsuario = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor',
      icon: 'info',
    });

    Swal.showLoading();

    this.auth.register(this.usuario).subscribe(
      (data) => {
        console.log(data);
        Swal.close();
        if (this.recordarUsuario) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');
      },
      (err) => {
        console.log(err.error.error.message);

        Swal.fire({
          text: err.error.error.message,
          icon: 'error',
          title: 'Error al Autenticar',
        });
      }
    );
  }
}
