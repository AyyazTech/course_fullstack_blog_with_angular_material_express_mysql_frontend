import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostHeaderComponent } from './post-header.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [PostHeaderComponent],
  exports: [PostHeaderComponent],
  imports: [CommonModule, RouterLink],
})
export class PostHeaderModule {}
