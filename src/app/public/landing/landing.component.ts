import { Component } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  posts = [];

  constructor(private postsService: PostsService) {
    this.loadPosts();
  }

  loadPosts() {
    this.postsService.getPosts().subscribe((response: any) => {
      this.posts = response;
    });
  }
}
