import {Component} from '@angular/core';
import {Task} from "../services/interfaces/task"
import {Router} from "@angular/router";
import {NewTaskCreatorService} from "../services/forTasks/new-task-creator.service";
import {ModalVisibilityService} from "../services/modal/modal-visibility.service";
import {ModalDataAssignService} from "../services/modal/modal-data-assign.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    tasks: Task[] = [];
    modalDefaultVisibility = false;

    constructor(
        private router: Router,
        private newTaskCreatorService: NewTaskCreatorService,
        private modalVisibilityService: ModalVisibilityService,
        private modalDataAssignService:ModalDataAssignService,
    ) {
    }

    ngOnInit(): void {
        this.tasks = this.newTaskCreatorService.getTasks();
        this.modalVisibilityService.modalVisibility$.subscribe(visible => {
            this.modalDefaultVisibility = visible;
        });
    }

    toggleCheck(task: Task) {
        task.checkDefaultStatus = !task.checkDefaultStatus;
    }

    navegationBetweenComponents() {
        this.router.navigate(['/create-task']);
    }

    setModalVisibility(data:Task){
        this.modalDataAssignService.setModalDataAssign(data);
        this.modalVisibilityService.modalVisibilitySubject.next(true);
    }
}
