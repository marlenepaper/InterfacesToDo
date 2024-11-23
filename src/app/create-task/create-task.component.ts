import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  constructor(private router:Router){}

  navegationBetweenComponents(){
    this.router.navigate(['/home']);
  }

  onSubmit(){
    this.router.navigate(['/home']);
  }

}
