import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId?: string;
  @Input({ required: true }) name?: string;

  constructor(private tasksService: TasksService) {}

  //initial value of add-task-form
  isAddingTask = false;

  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
  //     dueDate: '2025-12-31',
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u3',
  //     title: 'Build first prototype',
  //     summary: 'Build a first prototype of the online shop website',
  //     dueDate: '2024-05-31',
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'Prepare issue template',
  //     summary: 'Prepare and describe an issue template which will help with project management',
  //     dueDate: '2024-06-15',
  //   },
  // ];

  get selectedUserTasks() {
    // return this.tasks.filter((task) => task.userId === this.userId);
    if (this.userId) {
      return this.tasksService.getUserTasks(this.userId);
    } else {
      console.error('User ID is not defined.');
      return;
    }
  }

  // onCompleteTask(id: string) {
  //   // this.tasks = this.tasks.filter((task) => task.id !== id);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
    // if (this.userId) {
    //   this.tasks.unshift({
    //     id: new Date().getTime().toString(),
    //     userId: this.userId,
    //     title: taskData.title,
    //     summary: taskData.summary,
    //     dueDate: taskData.dueDate,
    //   });
    //   this.isAddingTask = false;
    // } else {
    //   console.error('User ID is not defined.');
    // }
   
  // }
}
