import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategoryBySlug(slug: string) {
    return this.http.get(environment.backendBaseUrl + '/category/slug/' + slug);
  }
}
