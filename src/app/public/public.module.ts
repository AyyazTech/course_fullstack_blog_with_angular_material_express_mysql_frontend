import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthorModule } from './author/author.module';
import { LandingModule } from './landing/landing.module';
import { PostModule } from './post/post.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderModule } from './shared/header/header.module';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LandingModule,
    HeaderModule,
    PostModule,
    AuthorModule,
    CategoryModule,
    TagModule,
  ],
})
export class PublicModule {}
