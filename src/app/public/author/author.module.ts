import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';
import { PostsModule } from '../shared/modules/posts/posts.module';

@NgModule({
  declarations: [AuthorComponent],
  imports: [CommonModule, PostsModule],
})
export class AuthorModule {}
