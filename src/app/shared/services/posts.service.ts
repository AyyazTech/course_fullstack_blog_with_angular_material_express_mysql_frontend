import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(
    options: {
      categorySlug?: string;
      authorId?: string;
      tagId?: number;
    } = {}
  ) {
    let queryStringVariables = [];
    if (options) {
      if (options.categorySlug)
        queryStringVariables.push(`categorySlog=${options.categorySlug}`);
      if (options.authorId)
        queryStringVariables.push(`authorId=${options.authorId}`);
      if (options.tagId) queryStringVariables.push(`tagId=${options.tagId}`);
    }
    return this.http.get(
      environment.backendBaseUrl + '/post?' + queryStringVariables.join('&')
    );
  }

  getPostBySlug(slug: string) {
    return this.http.get(environment.backendBaseUrl + '/post/slug/' + slug);
  }
}
