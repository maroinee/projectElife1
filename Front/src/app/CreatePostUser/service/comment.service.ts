import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) { }

  createComment(postId: number, content: string, postedBy: string): Observable<any> {
    const url = `${this.apiUrl}/create?postId=${postId}`;
    return this.http.post<any>(url, { content, postedBy }, this.getHeaders()).pipe(
      catchError(this.handleError)
    );
  }
  getCommentsByPostId(postId: number): Observable<any[]> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.get<any[]>(url, this.getHeaders()).pipe(
      catchError(this.handleError)
    );
  }

  updateComment(commentId: number, content: string): Observable<any> {
    const url = `${this.apiUrl}/${commentId}`;
    return this.http.put<any>(url, content, this.getHeaders()).pipe(
      catchError(this.handleError)
    );
  }

  deleteComment(commentId: number): Observable<any> {
    const url = `${this.apiUrl}/${commentId}`;
    return this.http.delete<any>(url, this.getHeaders()).pipe(
      catchError(this.handleError)
    );
  }

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // You can add more headers as needed, such as authorization token
      })
    };
  }

  private handleError(error: any) {
    console.error('Error in CommentService:', error);
    return throwError(error);
  }
}
