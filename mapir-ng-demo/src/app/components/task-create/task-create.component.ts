import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../../model/task';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})

export class TaskCreateComponent implements OnInit {
  submitted = false;
  taskForm: FormGroup;
  Tasks: any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
    this.readTasks();
  }

  ngOnInit() { }

  mainForm() {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]]
    });
  }

  // Getter to access form control
  get myForm() {
    return this.taskForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.taskForm.valid) {
      alert('form not valid');
      console.log(this.taskForm);
      return false;
    } else {
      const newTask = new Task(this.taskForm.value.title);
      console.log('creating task', newTask);
      this.apiService.createTask(newTask).subscribe(
        (res) => {
          console.log('Task successfully created!');
          this.readTasks();
        }, (error) => {
          console.log(error);
        });
    }
    this.taskForm.reset();
  }

  readTasks() {
    this.apiService.getTasks().subscribe((data) => {
     this.Tasks = data;
     console.log('showing task',this.Tasks);
    });
  }

  onChange(e, task) {
    task.isDone = e.target.checked;
    console.log('updating',task)
    this.apiService.updateTask(task._id, task).subscribe(res => {
      this.router.navigateByUrl('/create-task');
      console.log('Content updated successfully!')
    }, (error) => {
      console.log(error);
    });
  }

  removeTask(task, index) {
    if (window.confirm('Are you sure?')) {
        this.apiService.deleteTask(task._id).subscribe((data) => {
          this.Tasks.splice(index, 1);
        }
      );
    }
  }

}
