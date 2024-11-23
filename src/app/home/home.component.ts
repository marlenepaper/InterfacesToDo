import {Component} from '@angular/core';
import {Task} from "../services/interfaces/task"
import {Router} from "@angular/router";
import {NewTaskCreatorService} from "../services/forTasks/new-task-creator.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    tasks: Task[] = [];

    constructor(
        private router: Router,
        private newTaskCreatorService: NewTaskCreatorService
    ) {
    }

    ngOnInit(): void {
        this.tasks = this.newTaskCreatorService.getTasks();
    }

    toggleCheck(task: Task) {
        task.checkDefaultStatus = !task.checkDefaultStatus;
    }

    navegationBetweenComponents() {
        this.router.navigate(['/create-task']);
    }

}
