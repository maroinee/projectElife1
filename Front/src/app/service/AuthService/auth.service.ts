import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/users'; // URL de base de votre API backend

  constructor(private http: HttpClient) {}

  // Méthode pour l'inscription d'un utilisateur
  signup(user: any): Observable<any> {
    const url = `${this.baseUrl}/add`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, user, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Méthode pour la connexion d'un utilisateur
  login(credentials: { email: string, password: string }): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, credentials, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Méthode pour récupérer le profil utilisateur
  getUserProfile(): Observable<any> {
    const url = `${this.baseUrl}/profile`; // Adapter l'URL selon votre API backend pour récupérer le profil
    // Ajouter les en-têtes ou jetons d'authentification si nécessaire
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Méthode pour récupérer l'utilisateur actuel (exemple d'implémentation)
  getCurrentUser(): Observable<any> {
    // Exemple : Supposons que vous ayez un point de terminaison pour récupérer les détails de l'utilisateur actuel
    const url = `${this.baseUrl}/current-user`; // Adapter selon votre API backend
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Gestion des erreurs HTTP
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('Une erreur est survenue :', error.error.message);
    } else {
      // Erreur côté serveur
      console.error(`Code d'erreur : ${error.status}, ` + `Message : ${error.message}`);
    }
    return throwError('Quelque chose s\'est mal passé; veuillez réessayer plus tard.');
  }
}
