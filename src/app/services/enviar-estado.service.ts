import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnviarEstadoService {

  estado:BehaviorSubject<string> = new BehaviorSubject<string>("");
  estado$: Observable<string> = this.estado.asObservable();

  constructor() { }

  setEstado(estado:string) {
    this.estado.next(estado);
  }
}
