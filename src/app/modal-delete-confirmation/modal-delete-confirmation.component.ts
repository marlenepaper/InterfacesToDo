import { Component } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ModalVisibilityService} from "../services/modal/modal-visibility.service";
import {ModalDataAssignService} from "../services/modal/modal-data-assign.service";
import {Task} from "../services/interfaces/task";
import {NewTaskCreatorService} from "../services/forTasks/new-task-creator.service";

@Component({
  selector: 'app-modal-delete-confirmation',
  templateUrl: './modal-delete-confirmation.component.html',
  styleUrl: './modal-delete-confirmation.component.scss'
})
export class ModalDeleteConfirmationComponent {
  tasks: Task[] = [];

  task: Task | null ={
    id: -1,
    weekDay:"",
    day:0,
    month:"",
    time:"",
    taskName:"",
    checkDefaultStatus: false,
  };

  constructor(
      private modalVisibilityService: ModalVisibilityService,
      private modalDataAssignService: ModalDataAssignService,
      private newTaskCreatorService:NewTaskCreatorService,
  ){}

  ngOnInit() {
    this.modalDataAssignService.modalDataAssign$.subscribe(data => {
      this.task =data;
    });
  }

  setModalVisibility(){
    this.modalVisibilityService.modalVisibilitySubject.next(false);
  }

  deleteTask(task: number | undefined): void {
    this.newTaskCreatorService.deleteTask(task); // Llamar al servicio para eliminar la tarea
    this.tasks = this.newTaskCreatorService.getTasks(); // Actualizar la lista desde el servicio
    this.modalVisibilityService.modalVisibilitySubject.next(false);
  }

}
