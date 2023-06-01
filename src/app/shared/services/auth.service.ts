import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { share } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  session?: { accessToken: string; refreshToken: string; user: any };
  constructor(private httpClient: HttpClient, private router: Router) {
    if (localStorage.getItem('session')) {
      this.session = JSON.parse(localStorage.getItem('session') as string);
    }
  }

  login(email: string, password: string) {
    let ob = this.httpClient
      .post(environment.backendBaseUrl + '/auth/login', {
        email,
        password,
      })
      .pipe(share());

    ob.subscribe((session: any) => {
      if (session && session.accessToken) {
        localStorage.setItem('session', JSON.stringify(session));
        this.session = session;
      }
    });
    return ob;
  }

  logout() {
    let ob = this.httpClient
      .post(environment.backendBaseUrl + '/auth/logout', {})
      .pipe(share());

    ob.subscribe(() => {
      this.session = undefined;
      localStorage.removeItem('session');
      this.router.navigateByUrl('/');
    });

    return ob;
  }
}
