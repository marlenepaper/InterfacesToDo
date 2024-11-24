import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Task} from "../interfaces/task";

@Injectable({
  providedIn: 'root'
})
export class ModalDataAssignService {

  modalDataAssignSubject:BehaviorSubject<Task | null>=new BehaviorSubject<Task | null>(null);
  modalDataAssign$:Observable <Task | null>=this.modalDataAssignSubject.asObservable();

  constructor() { }

  setModalDataAssign(data: Task |null){
    // console.log("inicial ", data);
    this.modalDataAssignSubject.next(data);
  }
}
