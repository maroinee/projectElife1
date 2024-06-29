import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup/signup.component';
import { SigninComponent } from './signin/signin/signin.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {path:"signup" , component:SignupComponent},
  {path:"signin" , component:SigninComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
})
export class AppRoutingModule { }
