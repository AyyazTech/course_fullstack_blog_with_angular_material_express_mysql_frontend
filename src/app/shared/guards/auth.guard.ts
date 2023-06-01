import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).session) return true;

  inject(Router).navigateByUrl('/');

  return false;
};
