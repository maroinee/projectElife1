import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from './../../service/post.service';
import { PostUser } from '../../../models/PostUser';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-al.component.html',
  styleUrls: ['./view-al.component.scss']
})
export class ViewAllComponent implements OnInit {
  allPosts: PostUser[] = [];

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(
      (res: PostUser[]) => {
        console.log(res);
        this.allPosts = res;
      },
      error => {
        this.snackBar.open('Something went wrong while fetching posts!', 'OK');
      }
    );
  }
}
