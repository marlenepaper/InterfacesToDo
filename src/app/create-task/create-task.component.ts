import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NewTaskCreatorService} from "../services/forTasks/new-task-creator.service";
import {NewTask} from "../services/interfaces/new-task";

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
    newTask: NewTask = {
        id: 0,
        dueDate: '',
        time: '',
        taskName: '',
        checkDefaultStatus: false,
    };

    constructor(
        private router: Router,
        private newTaskCreatorService: NewTaskCreatorService
    ) {}

    navegationBetweenComponents() {
        this.router.navigate(['/home']);
    }


    onSubmit() {

        const taskToAdd: NewTask = { ...this.newTask };

        this.newTaskCreatorService.addNewTask(taskToAdd);

        this.newTask = {
            id: 0,
            dueDate: '',
            time: '',
            taskName: '',
            checkDefaultStatus: false,
        };

        this.router.navigate(['/home']);
    }

}
