import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from '../shared/components/logout/logout.component';


const routtes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home Page',
      descrption: 'Description of HomeComponent Component',
      ogTitle: 'Title of HomeComponent Component for social media',
      ogDescription: 'Description of HomeComponent Component for social media',
      ogImage: 'ImagePathForSocialMedia'
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routtes)
  ]
})
export class DashboardRoutingModule { }
