import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ModalDeleteConfirmationComponent } from './modal-delete-confirmation/modal-delete-confirmation.component';
import { BotonFlotanteComponent } from './boton-flotante/boton-flotante.component';
import { ListaTareasExamenComponent } from './lista-tareas-examen/lista-tareas-examen.component';
import { DetallesTareaExamenComponent } from './detalles-tarea-examen/detalles-tarea-examen.component';
import { TrabajandoConArraysComponent } from './trabajando-con-arrays/trabajando-con-arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateTaskComponent,
    ModalDeleteConfirmationComponent,
    BotonFlotanteComponent,
    ListaTareasExamenComponent,
    DetallesTareaExamenComponent,
    TrabajandoConArraysComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
