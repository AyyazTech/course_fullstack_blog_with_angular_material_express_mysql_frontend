import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  login() {
    let email = this.form.value.email;
    let password = this.form.value.password;
    this.authService.login(email, password).subscribe({
      next: (session: any) => {
        if (session.accessToken) {
          this.router.navigateByUrl('/dashboard');
        } else {
          this.snackbar.open(
            'Invalid user name or password. Please try again',
            'Ok',
            {
              duration: 3000,
            }
          );
        }
      },
      error: (error: any) => {
        this.snackbar.open(
          error.error ? error.error.message : error.message,
          'Ok',
          {
            duration: 3000,
          }
        );
        console.log(error);
      },
      complete: () => {
        this.dialog.closeAll();
      },
    });
  }
}
