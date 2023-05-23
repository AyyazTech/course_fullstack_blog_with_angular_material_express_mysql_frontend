import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  posts = [];
  category: any;

  constructor(
    private postsService: PostsService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.loadPosts(params.slug);
      this.loadCategory(params.slug);
    });
  }

  loadPosts(slug: string) {
    this.postsService
      .getPosts({ categorySlug: slug })
      .subscribe((response: any) => {
        this.posts = response;
      });
  }

  loadCategory(slug: string) {
    this.categoriesService.getCategoryBySlug(slug).subscribe((r) => {
      this.category = r;
    });
  }
}
