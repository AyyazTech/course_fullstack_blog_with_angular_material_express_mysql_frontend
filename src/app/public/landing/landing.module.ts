import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { PostsModule } from '../shared/modules/posts/posts.module';
@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, PostsModule],
})
export class LandingModule {}
