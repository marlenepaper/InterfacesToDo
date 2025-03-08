import {Component, OnInit} from '@angular/core';
import {Task} from "../services/interfaces/task";
import {ExamenTarea} from "../services/interfaces/examen-tarea";
import {Router} from "@angular/router";
import {DetalleDataAssignService} from "../services/examen/detalle-data-assign.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EnviarEstadoService} from "../services/enviar-estado.service";

@Component({
    selector: 'app-lista-tareas-examen',
    templateUrl: './lista-tareas-examen.component.html',
    styleUrl: './lista-tareas-examen.component.scss'
})
export class ListaTareasExamenComponent implements OnInit {

    examenTareas: ExamenTarea[] = [
        {
            id: 1,
            nombreTarea: "Tarea:1",
            descripcion: "descripcion:1",
            estado: "Finalizado",
        },
        {
            id: 2,
            nombreTarea: "Tarea:2",
            descripcion: "descripcion:2",
            estado: "Pendiente",
        },
        {
            id: 3,
            nombreTarea: "Tarea:3",
            descripcion: "descripcion:3",
            estado: "Finalizado",
        },
        {
            id: 4,
            nombreTarea: "Tarea:4",
            descripcion: "descripcion:4",
            estado: "Finalizado",
        },
        {
            id: 5,
            nombreTarea: "Tarea:5",
            descripcion: "descripcion:5",
            estado: "Finalizado",
        },
    ];

    formulario:FormGroup;
    estado="todos";

    constructor(private router: Router,
                private detalleDataAssignService: DetalleDataAssignService,
                private formBuilder: FormBuilder,
                private enviarEstadoService: EnviarEstadoService,
    ) {
        this.formulario=this.formBuilder.group({
            estado:["todos",[Validators.required]],
        })
    }


    ngOnInit() {
        this.enviarEstadoService.estado$.subscribe(valor => {
            this.estado =valor;
        });
    }


    navegationBetweenComponents(data:ExamenTarea ) {
        this.detalleDataAssignService.setModalDataAssign(data);
        this.router.navigate(['/detalle-tareas-examen']);
    }

    enviarEstado(){
        // alert(this.formulario.value.estado)
        this.enviarEstadoService.setEstado(this.formulario.value.estado);
    }
}
