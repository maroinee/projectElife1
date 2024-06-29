import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/AuthService/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userProfile: any; // Définir le type de userProfile selon vos besoins

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Chargez les détails du profil de l'utilisateur depuis le service d'authentification
    this.authService.getUserProfile().subscribe(
      user => {
        this.userProfile = user;
      },
      error => {
        console.error('Erreur lors de la récupération du profil utilisateur : ', error);
        // Gérer l'erreur ici (par exemple, déconnexion de l'utilisateur)
      }
    );
  }
}
