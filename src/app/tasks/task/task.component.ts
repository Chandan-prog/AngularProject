import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { TasksService } from '../tasks.service';

type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {

  constructor(private tasksServices:TasksService){}

  @Input({ required: true }) task!: Task;

  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.tasksServices.removeTask(this.task.id)
  }
}
