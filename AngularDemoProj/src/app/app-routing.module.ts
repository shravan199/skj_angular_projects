import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CovidCaseInIndiaComponent} from './Covid/covid-case-in-india.component'

const routes: Routes = [
 { path:'covid-status', component:CovidCaseInIndiaComponent },
 //{path: '', redirectTo:'/covid-status', pathMatch: 'full',},
 //{path: '**', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
