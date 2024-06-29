import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/AuthService/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  validateForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.validateForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      lieux: ['', Validators.required],
      groupsang: ['', Validators.required],
      cin: ['', Validators.required],
      telephone: ['', Validators.required],
      sexe: ['', Validators.required],
      dateBirthday: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.authService.signup(this.validateForm.value).subscribe(
        response => {
          console.log('Inscription réussie : ', response);
          this.successMessage = 'Inscription réussie !';

          // Redirection vers le tableau de bord (dashboard) après l'inscription
          this.router.navigate(['/signin']);

          // Effacer le message de succès après quelques secondes
          setTimeout(() => {
            this.successMessage = '';
          }, 5000); // 5000 ms = 5 secondes
        },
        error => {
          console.error('Erreur lors de l\'inscription : ', error);
          this.errorMessage = 'Erreur lors de l\'inscription. Veuillez réessayer plus tard.';
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
