import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostItemModule } from './post-item/post-item.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [PostsComponent],
  exports: [PostsComponent],
  imports: [CommonModule, PostItemModule],
})
export class PostsModule {}
