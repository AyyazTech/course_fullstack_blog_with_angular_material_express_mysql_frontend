import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
})
export class PostsModule {}
