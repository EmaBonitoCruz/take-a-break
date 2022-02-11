import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ManifestoComponent } from './manifesto/manifesto.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'manifesto',
    component:ManifestoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
