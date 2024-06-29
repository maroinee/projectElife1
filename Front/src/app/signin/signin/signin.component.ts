import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/AuthService/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  validateForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = ''; // Ajout de la propriété successMessage

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.authService.login(this.validateForm.value).subscribe(
        response => {
          // Connexion réussie
          console.log('Connexion réussie : ', response);
          this.successMessage = 'Connexion réussie !'; // Définir le message de succès
          
          // Rediriger vers le tableau de bord (dashboard)
          this.router.navigate(['/dashboard']);
        },
        error => {
          // Erreur de connexion
          console.error('Erreur lors de la connexion : ', error);
          this.errorMessage = 'Erreur lors de la connexion. Email ou mot de passe incorrect.';
        }
      );
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      for (const key in this.validateForm.controls) {
        if (this.validateForm.controls.hasOwnProperty(key)) {
          this.validateForm.controls[key].markAsDirty();
          this.validateForm.controls[key].updateValueAndValidity();
        }
      }
    }
  }
}
