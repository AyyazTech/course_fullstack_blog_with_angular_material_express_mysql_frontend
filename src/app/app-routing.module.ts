import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/public/public.module').then((r) => r.PublicModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/cms/cms.module').then((r) => r.CmsModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
