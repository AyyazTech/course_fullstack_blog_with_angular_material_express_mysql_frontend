import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PublicComponent } from './public.component';
import { PostComponent } from './post/post.component';
import { AuthorComponent } from './author/author.component';
import { CategoryComponent } from './category/category.component';
import { TagComponent } from './tag/tag.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: LandingComponent,
      },
      {
        path: 'post/:slug',
        component: PostComponent,
      },
      {
        path: 'author/:authorId',
        component: AuthorComponent,
      },
      {
        path: 'category/:slug',
        component: CategoryComponent,
      },
      {
        path: 'tag/:slug',
        component: TagComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
