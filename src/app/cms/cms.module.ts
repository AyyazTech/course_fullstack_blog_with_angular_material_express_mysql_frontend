import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { HeaderModule } from './shared/modules/header/header.module';
import { SidebarModule } from './shared/modules/sidebar/sidebar.module';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [CmsComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    MatSidenavModule,
    HeaderModule,
    SidebarModule,
    PostsModule,
    CategoriesModule,
    PostsModule,
  ],
})
export class CmsModule {}
