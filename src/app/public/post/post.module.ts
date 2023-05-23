import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { PostHeaderModule } from '../shared/modules/post-header/post-header.module';
import { PostItemModule } from '../shared/modules/posts/post-item/post-item.module';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    RouterModule,
    PostHeaderModule,
    PostItemModule,
  ],
})
export class PostModule {}
