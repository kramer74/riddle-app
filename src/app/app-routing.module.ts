import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiddleComponent } from "./riddle/riddle.components";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/game'
  },
  {
    path: 'game',
    component: RiddleComponent
  }]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
