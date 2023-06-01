import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  onSearch = new Subject();

  constructor() {}
}
