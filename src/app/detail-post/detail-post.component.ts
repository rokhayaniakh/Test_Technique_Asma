import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { User } from '../models/auteur';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css'],
})
export class DetailPostComponent implements OnInit {
  id!: number;
  post!: Post;
  listauteur!: User[];
  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.postService.detail(this.id).subscribe((data: Post) => {
      this.post = data;
    });
    this.postService
      .getAuteur()
      .pipe(first())
      .subscribe((listauteur) => (this.listauteur = listauteur));
  }
}
