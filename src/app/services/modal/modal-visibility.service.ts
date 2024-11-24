import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalVisibilityService {

  modalVisibilitySubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  modalVisibility$:Observable<boolean>=this.modalVisibilitySubject.asObservable();

  constructor() { }

  setModalVisibility(visible: boolean){
    this.modalVisibilitySubject.next(visible);
  }
}
