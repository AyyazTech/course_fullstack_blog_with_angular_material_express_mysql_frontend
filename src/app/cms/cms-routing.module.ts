import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './cms.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  {
    path: '',
    component: CmsComponent,
    children: [
      { path: '', component: PostsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'tags', component: TagsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
