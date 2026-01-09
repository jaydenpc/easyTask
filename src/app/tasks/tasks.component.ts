import { Component , Input, Output, EventEmitter} from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'master angular',
      summary: 'learn all the basic and advanced concepts of angular',
      dueDate: '12-12-2024',
    },
     {
      id: 't2',
      userId: 'u3',
      title: 'build first prototype',
      summary: 'learn all the basic and advanced concepts of angular',
      dueDate: '10-12-2024',
    },
     {
      id: 't3',
      userId: 'u3',
      title: 'prepare template',
      summary: 'learn all the basic and advanced concepts of angular',
      dueDate: '12-10-2024',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }



  


  

}
