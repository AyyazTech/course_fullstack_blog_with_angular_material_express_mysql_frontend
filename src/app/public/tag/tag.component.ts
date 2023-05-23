import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { PostsService } from 'src/app/shared/services/posts.service';
import { TagsService } from 'src/app/shared/services/tags.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  posts = [];
  tag: any;

  constructor(
    private postsService: PostsService,
    private tagsService: TagsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.loadTag(params.slug);
    });
  }

  loadPosts(tagId: number) {
    this.postsService.getPosts({ tagId }).subscribe((response: any) => {
      this.posts = response;
    });
  }

  loadTag(slug: string) {
    this.tagsService.getTagBySlug(slug).subscribe((r) => {
      this.tag = r;
      this.loadPosts(this.tag.id);
    });
  }
}
