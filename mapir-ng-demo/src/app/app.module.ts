import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-task' },
  { path: 'create-task', component: TaskCreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
