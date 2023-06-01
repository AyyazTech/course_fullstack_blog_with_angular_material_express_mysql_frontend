import { Component } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import moment from 'moment';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  moment = moment;
  displayedColumns: string[] = [
    'id',
    'title',
    'categoryId',
    'createdAt',
    'actions',
  ];
  dataSource: any = [];
  constructor(private postsService: PostsService) {
    this.loadPosts();
  }

  loadPosts() {
    this.postsService.getPosts().subscribe((posts) => {
      this.dataSource = posts;
    });
  }

  deletePost(id: any) {
    this.postsService.deletePost(id).subscribe((r) => {
      this.dataSource = this.dataSource.filter((r: any) => r.id != id);
    });
  }
}
