import { Component } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { GeneralService } from '../shared/services/general.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  posts = [];

  constructor(
    private postsService: PostsService,
    private generalService: GeneralService
  ) {
    this.loadPosts();

    this.generalService.onSearch.subscribe((searchKeyword: any) => {
      this.loadPosts(searchKeyword);
    });
  }

  loadPosts(searchKeyword = '') {
    this.postsService.getPosts({ searchKeyword }).subscribe((response: any) => {
      this.posts = response;
    });
  }
}
