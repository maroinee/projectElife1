import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SignupComponent } from './signup/signup/signup.component';
import { SigninComponent } from './signin/signin/signin.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreatePostComponent } from './CreatePostUser/createPost/create-post/create-post.component';
import { ViewPostComponent } from './CreatePostUser/viewPost/view/view.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewAllComponent } from './CreatePostUser/viewAll/view-al/view-al.component';
import { RouterModule, Routes } from '@angular/router'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const appRoutes: Routes = [
  { path: 'view-post/:id', component: ViewPostComponent }, // Example route definition, adjust as needed
  { path: 'view-all', component: ViewAllComponent },
  // Add more routes as necessary
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcceuilComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes) ,
    MatFormFieldModule, // Importez MatFormFieldModule ici
    MatInputModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
