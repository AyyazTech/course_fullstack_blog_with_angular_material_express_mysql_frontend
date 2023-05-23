import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/shared/services/posts.service';
import { TagsService } from 'src/app/shared/services/tags.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  post: any;
  category: any;
  tags = [];

  constructor(
    private postsService: PostsService,
    private tagsService: TagsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.loadPost(params.slug);
    });
  }

  loadTags(postId: number) {
    this.tagsService.getTagsByPostId(postId).subscribe((response: any) => {
      this.tags = response;
    });
  }

  loadPost(slug: string) {
    this.postsService.getPostBySlug(slug).subscribe((response: any) => {
      this.post = response;
      this.loadTags(this.post.id);
    });
  }
}
