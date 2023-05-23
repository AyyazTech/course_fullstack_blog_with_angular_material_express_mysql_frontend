import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from './post-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { PostHeaderModule } from '../../post-header/post-header.module';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [PostItemComponent],
  exports: [PostItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    PostHeaderModule,
    MatChipsModule,
  ],
})
export class PostItemModule {}
