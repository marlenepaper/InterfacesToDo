import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CreateTaskComponent} from "./create-task/create-task.component";
import {ModalDeleteConfirmationComponent} from "./modal-delete-confirmation/modal-delete-confirmation.component";
import {ListaTareasExamenComponent} from "./lista-tareas-examen/lista-tareas-examen.component";
import {DetallesTareaExamenComponent} from "./detalles-tarea-examen/detalles-tarea-examen.component";
import {BotonFlotanteComponent} from "./boton-flotante/boton-flotante.component";
import {TrabajandoConArraysComponent} from "./trabajando-con-arrays/trabajando-con-arrays.component";

// const routes: Routes = [
//     {path: "", component: BotonFlotanteComponent, children: [
//             {path: "lista-tareas-examen", component: ListaTareasExamenComponent},
//             {path: "detalle-tareas-examen", component: DetallesTareaExamenComponent},
//         ]},
//     {path: "**", component: BotonFlotanteComponent, children: [
//             {path: "lista-tareas-examen", component: ListaTareasExamenComponent},
//         ]},
// ];

const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "create-task", component: CreateTaskComponent},
    {path: "lista-tareas-examen", component: ListaTareasExamenComponent},
    {path: "detalle-tareas-examen", component: DetallesTareaExamenComponent},
    {path: "trabajando", component: TrabajandoConArraysComponent},

    { path: "**", component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
