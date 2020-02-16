import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchpageComponent } from './searchpage/searchpage.component'


const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: SearchpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
