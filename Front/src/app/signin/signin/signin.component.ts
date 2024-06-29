import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/AuthService/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  validateForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('Formulaire valide soumis : ', this.validateForm.value);
      
      this.authService.login(this.validateForm.value).subscribe(
        response => {
          console.log('Connexion réussie : ', response);
          this.successMessage = 'Connexion réussie !';
          this.errorMessage = '';
        },
        error => {
          console.error('Erreur lors de la connexion : ', error);
          this.successMessage = '';
          this.errorMessage = 'Erreur lors de la connexion. Email ou mot de passe incorrect.';
        }
      );
    } else {
      for (const key in this.validateForm.controls) {
        if (this.validateForm.controls.hasOwnProperty(key)) {
          this.validateForm.controls[key].markAsDirty();
          this.validateForm.controls[key].updateValueAndValidity();
        }
      }
    }
  }
}
