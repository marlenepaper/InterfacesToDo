import { Component } from '@angular/core';
import{Task} from "../services/interfaces/task"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tasks:Task[]=[
    {
      id:1,
      weekDay:"MON",
      day:22,
      month:"NOV",
      time:"15:35",
      taskName:"Ir a comer con Jon",
    },
    {
      id:2,
      weekDay:"TUE",
      day:21,
      month:"NOV",
      time:"01:05",
      taskName:"Recoger a Aldo del aeropuerto",
    },
    {
      id:3,
      weekDay:"WED",
      day:23,
      month:"NOV",
      time:"15:30",
      taskName:"Cita con el dentista",
    },
    {
      id:4,
      weekDay:"THU",
      day:24,
      month:"NOV",
      time:"04:08",
      taskName:"Café con Maritza",
    }
  ]
}
