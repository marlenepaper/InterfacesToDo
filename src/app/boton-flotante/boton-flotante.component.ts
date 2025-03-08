import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-boton-flotante',
  templateUrl: './boton-flotante.component.html',
  styleUrl: './boton-flotante.component.scss'
})
export class BotonFlotanteComponent {

  constructor(private router: Router) { }


  navegationBetweenComponents() {
    this.router.navigate(['/lista-tareas-examen']);
  }
}
