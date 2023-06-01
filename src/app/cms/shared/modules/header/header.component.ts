import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() menuClicked: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout().subscribe((r) => {});
  }
}
