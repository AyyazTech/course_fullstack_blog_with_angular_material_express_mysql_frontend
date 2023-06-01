import { Component } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../modules/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private generalService: GeneralService,
    private dialog: MatDialog
  ) {}

  onSearch(event: any) {
    this.generalService.onSearch.next(event.target.value);
  }

  showLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: '400px',
      height: '320px',
    });
  }
}
