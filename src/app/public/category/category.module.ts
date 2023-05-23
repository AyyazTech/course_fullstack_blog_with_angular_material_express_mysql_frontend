import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { PostsModule } from '../shared/modules/posts/posts.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, PostsModule],
})
export class CategoryModule {}
