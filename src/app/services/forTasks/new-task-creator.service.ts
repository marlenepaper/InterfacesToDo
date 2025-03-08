import { Injectable } from '@angular/core';
import {Task} from "../interfaces/task";
import {NewTask} from "../interfaces/new-task";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewTaskCreatorService {

  tasks: Task[] = [];
  modalDataAssignSubject:BehaviorSubject<Task | null>=new BehaviorSubject<Task | null>(null);
  modalDataAssign$:Observable <Task | null>=this.modalDataAssignSubject.asObservable();

  constructor() { }

  addNewTask(newTask: NewTask): void {
    const date = new Date(newTask.dueDate);
    const task: Task = {
      id: this.tasks.length + 1,
      weekDay: date.toLocaleString('en-US', { weekday: 'short' }).toUpperCase(),
      day: date.getDate(),
      month: date.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
      time: newTask.time,
      taskName: newTask.taskName,
      checkDefaultStatus: newTask.checkDefaultStatus,
    };
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks(): Task[] {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
    return this.tasks;
  }

  deleteTask(taskId: number | undefined): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
