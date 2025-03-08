import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Task} from "../services/interfaces/task";
import {ExamenTarea} from "../services/interfaces/examen-tarea";
import {ModalDataAssignService} from "../services/modal/modal-data-assign.service";
import {DetalleDataAssignService} from "../services/examen/detalle-data-assign.service";

@Component({
  selector: 'app-detalles-tarea-examen',
  templateUrl: './detalles-tarea-examen.component.html',
  styleUrl: './detalles-tarea-examen.component.scss'
})
export class DetallesTareaExamenComponent implements OnInit{

  examenTareas: ExamenTarea[] = [];

  examenTarea: ExamenTarea | null ={
    id: -1,
    nombreTarea:"",
    descripcion:"",
    estado:"",
  };

  constructor(
      private router: Router,
      private detalleDataAssignService: DetalleDataAssignService,
      ) {}

  ngOnInit() {
    this.detalleDataAssignService.modalDataAssign$.subscribe(data => {
      this.examenTarea =data;
    });
  }

  navegationBetweenComponents() {
    this.router.navigate(['/lista-tareas-examen']);
  }

}
