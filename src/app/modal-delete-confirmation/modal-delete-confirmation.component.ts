import { Component } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ModalVisibilityService} from "../services/modal/modal-visibility.service";
import {ModalDataAssignService} from "../services/modal/modal-data-assign.service";
import {Task} from "../services/interfaces/task";

@Component({
  selector: 'app-modal-delete-confirmation',
  templateUrl: './modal-delete-confirmation.component.html',
  styleUrl: './modal-delete-confirmation.component.scss'
})
export class ModalDeleteConfirmationComponent {

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
  ){}

  ngOnInit() {
    this.modalDataAssignService.modalDataAssign$.subscribe(data => {
      console.log(data);
      this.task =data;
    });
  }

  setModalVisibility(){
    this.modalVisibilityService.modalVisibilitySubject.next(false);
  }

}
