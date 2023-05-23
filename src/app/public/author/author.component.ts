import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent {
  posts = [];
  author: any;

  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.loadPosts(params.authorId);
      this.loadAuthor(params.authorId);
    });
  }

  loadAuthor(authorId: any) {
    this.usersService.getUser(authorId).subscribe((response: any) => {
      this.author = response;
    });
  }

  loadPosts(authorId: any) {
    this.postsService.getPosts({ authorId }).subscribe((response: any) => {
      this.posts = response;
    });
  }
}
