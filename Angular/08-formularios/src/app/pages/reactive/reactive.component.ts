import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { retry } from 'rxjs/operators';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {
  forma: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validadores: ValidadoresService
  ) {
    this.crearFormular();
    this.cargarDataFormulario();
    this.crearListeners();
  }

  ngOnInit(): void {}

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get apellidoNoValido() {
    return (
      this.forma.get('apellido').invalid && this.forma.get('apellido').touched
    );
  }
  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get distritoNoValido() {
    return (
      this.forma.get('direccion.distrito').invalid &&
      this.forma.get('direccion.distrito').touched
    );
  }

  get ciudadNoValido() {
    return (
      this.forma.get('direccion.ciudad').invalid &&
      this.forma.get('direccion.ciudad').touched
    );
  }

  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }

  get pass1NoValido() {
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
  }

  get pass2NoValido() {
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;

    return pass1 === pass2 ? false : true;
  }

  get usuarioNoValido() {
    return (
      this.forma.get('usuario').invalid && this.forma.get('usuario').touched
    );
  }

  crearFormular() {
    this.forma = this.formBuilder.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(5)]],
        apellido: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            this.validadores.noSolares,
          ],
        ],
        correo: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        usuario: ['', , this.validadores.existeUsuario],
        pass1: ['', Validators.required],
        pass2: ['', Validators.required],
        direccion: this.formBuilder.group({
          distrito: ['', Validators.required],
          ciudad: ['', Validators.required],
        }),
        pasatiempos: this.formBuilder.array([]),
      },
      {
        validators: this.validadores.passwordIguales('pass1', 'pass2'),
      }
    );
  }

  cargarDataFormulario() {
    //this.forma.setValue({
    this.forma.reset({
      nombre: 'Bryan',
      apellido: 'Solares',
      correo: 'solares.josue@oulook.com',
      direccion: {
        distrito: 'Zona 11',
        ciudad: 'Guatemala',
      },
    });
  }

  guardar() {
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((e) => {
        if (e instanceof FormGroup) {
          Object.values(e.controls).forEach((ee) => {
            ee.markAsTouched();
          });
        } else {
          e.markAsTouched();
        }
      });
      return;
    }
    console.log(this.forma);

    this.forma.reset({
      nombre: '',
    });
  }

  agregarPasatiempo() {
    this.pasatiempos.push(this.formBuilder.control(''));
  }

  eliminarPasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }

  crearListeners(){
    //this.forma.valueChanges.subscribe(valor => console.log(valor));
    //this.forma.statusChanges.subscribe(status => console.log(status));
    this.forma.get('nombre').valueChanges.subscribe(console.log)
  }
}
