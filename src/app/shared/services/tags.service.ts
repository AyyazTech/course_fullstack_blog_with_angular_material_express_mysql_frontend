import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  constructor(private http: HttpClient) {}

  getTagsByPostId(postId: any) {
    return this.http.get(environment.backendBaseUrl + '/tag/post/' + postId);
  }
  getTagBySlug(slug: string) {
    return this.http.get(environment.backendBaseUrl + '/tag/slug/' + slug);
  }
}
