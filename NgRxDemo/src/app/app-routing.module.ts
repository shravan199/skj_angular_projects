import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/components/layout/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'users', component:UserListComponent },
      { path: 'post', component:PostComponent },
      { path: 'post1', component:PostComponent },
      { path: 'post2', component:PostComponent },
      { path: 'post3', component:PostComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
