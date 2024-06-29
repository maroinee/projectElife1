import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/AuthService/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  validateForm!: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      lieux: ['', Validators.required],
      groupsang: ['', Validators.required],
      cin: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      sexe: ['', Validators.required],
      dateBirthday: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('Formulaire valide soumis : ', this.validateForm.value);
      
      // Appel du service d'authentification pour l'inscription
      this.authService.signup(this.validateForm.value).subscribe(
        response => {
          console.log('Inscription réussie : ', response);
          this.successMessage = 'Inscription réussie !';
        },
        error => {
          console.error('Erreur lors de l\'inscription : ', error);
          // Gérer l'erreur ici (par exemple, afficher un message d'erreur à l'utilisateur)
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
