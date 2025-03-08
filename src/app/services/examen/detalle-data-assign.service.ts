import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ExamenTarea} from "../interfaces/examen-tarea";

@Injectable({
  providedIn: 'root'
})
export class DetalleDataAssignService {
  modalDataAssignSubject:BehaviorSubject<ExamenTarea | null>=new BehaviorSubject<ExamenTarea | null>(null);
  modalDataAssign$:Observable <ExamenTarea | null>=this.modalDataAssignSubject.asObservable();

  constructor() { }
  setModalDataAssign(data: ExamenTarea |null) {
    // console.log("inicial ", data);
    this.modalDataAssignSubject.next(data);
  }
}
