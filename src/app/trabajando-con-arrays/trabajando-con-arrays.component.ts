import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Persona} from "../services/interfaces/persona";

@Component({
  selector: 'app-trabajando-con-arrays',
  templateUrl: './trabajando-con-arrays.component.html',
  styleUrl: './trabajando-con-arrays.component.scss'
})
export class TrabajandoConArraysComponent {
  formulario:FormGroup;
  personas:Persona[]=[];

  constructor(private formBuilder: FormBuilder) {
    this.formulario = formBuilder.group({
      nombre:['', Validators.required],
      edad:['', Validators.required],
    })
  }

  addPersona(){
    this.personas.push({
      nombre: this.formulario.value.nombre,
      edad: this.formulario.value.edad,
    })
  }

}
