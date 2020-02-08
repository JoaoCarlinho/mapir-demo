import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  // updateTaskStatus(e) {
  //   console.log(`updating ${this.title} completed from ${this.isDone}`);
  //   this.isDone = !this.isDone;
  //   console.log(`to ${this.isDone}`);
  //   this.apiService.updateTask(this._id, {title: this.title, isDone: this.isDone});
  // }

  // removeTask() {
  //   if (window.confirm('Are you sure?')) {
  //       this.apiService.deleteTask(this._id).subscribe((data) => {
  //         // this.Tasks.splice(index, 1);
  //         this.apiService.getTasks();
  //       }
  //     );
  //   }
  // }

}
