import { Component, Input } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss'],
})
export class PostHeaderComponent {
  @Input() category: any;
  @Input() author: any;
  @Input() date: any;

  moment = moment;
}
