import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';

const  loginModuleRoutes: Routes = [
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(loginModuleRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
