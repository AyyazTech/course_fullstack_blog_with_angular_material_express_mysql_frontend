import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { PostsModule } from '../shared/modules/posts/posts.module';

@NgModule({
  declarations: [TagComponent],
  imports: [CommonModule, PostsModule],
})
export class TagModule {}
