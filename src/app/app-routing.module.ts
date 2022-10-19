import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Playstation5Component } from './playstation5/playstation5.component';

const routes: Routes = [
  {
    path: '' ,
    component:HomeComponent
  },

  {
    path:'playstation5',
    component:Playstation5Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
