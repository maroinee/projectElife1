import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SignupComponent } from './signup/signup/signup.component';
import { SigninComponent } from './signin/signin/signin.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { CreatePostComponent } from './CreatePostUser/createPost/create-post/create-post.component';
import { ViewPostComponent } from './CreatePostUser/viewPost/view/view.component';
import { ViewAllComponent } from './CreatePostUser/viewAll/view-al/view-al.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'acceuil', component: AcceuilComponent },
  {path:'signup' , component:SignupComponent},
  {path:'signin' , component:SigninComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'view/:id', component: ViewPostComponent },
  { path: 'view-al', component:ViewAllComponent },
  { path: 'sidebar', component:SidebarComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
