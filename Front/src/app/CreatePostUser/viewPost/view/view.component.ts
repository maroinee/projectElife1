import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../service/comment.service';
import { PostService } from '../../service/post.service';
import { PostUser } from '../../../models/PostUser';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from '../../../service/AuthService/auth.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ViewPostComponent implements OnInit {
  postId: number;
  postData: PostUser | null = null;
  comments: any[] = [];
  commentForm: FormGroup;
  currentUser: any; 

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService, 
  ) {
    this.postId = this.activatedRoute.snapshot.params['id'];
    this.commentForm = this.fb.group({
      postedBy: [{ value: '', disabled: true }, Validators.required], // Initialize with an empty string
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getPostById();
    this.getCommentsByPost();
    this.currentUser = this.authService.getCurrentUser(); // Obtenez les détails de l'utilisateur actuellement connecté
  }

  getPostById() {
    this.postService.getPostById(this.postId).subscribe(
      (res: PostUser) => {
        this.postData = res;
      },
      error => {
        this.snackBar.open('Error fetching post', 'OK');
      }
    );
  }

  getCommentsByPost() {
    this.commentService.getCommentsByPostId(this.postId).subscribe(
      (res: any[]) => {
        this.comments = res; // Assurez-vous que le service renvoie tous les détails nécessaires des commentaires
      },
      error => {
        this.snackBar.open('Error fetching comments', 'OK');
      }
    );
  }

  likePost() {
    this.postService.likePost(this.postId).subscribe(
      () => {
        this.snackBar.open('Post liked successfully', 'OK');
        this.getPostById(); // Rafraîchir les données du post après le like
      },
      error => {
        this.snackBar.open('Error liking post', 'OK');
      }
    );
  }

  publishComment() {
    if (this.commentForm.valid) {
      const { content } = this.commentForm.value;
      const postedBy = this.currentUser.name; // Utilisez le nom de l'utilisateur actuel
      this.commentService.createComment(this.postId, content, postedBy).subscribe(
        () => {
          this.snackBar.open('Comment published successfully', 'OK');
          this.getCommentsByPost(); // Rafraîchir les commentaires après publication
          this.commentForm.reset();
        },
        error => {
          this.snackBar.open('Error publishing comment', 'OK');
        }
      );
    }
  }
}
