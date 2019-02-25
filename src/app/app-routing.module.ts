import { Task2Component } from './task2/task2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task1Component } from './task1/task1.component';

const routes: Routes = [
  {
    path: 'a', component: Task2Component
  },
  {
    path: 'b', component: Task1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
