import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getPosts(
    options: {
      categorySlug?: string;
      authorId?: string;
      tagId?: number;
      searchKeyword?: string;
    } = {}
  ) {
    let queryStringVariables = [];
    if (options) {
      if (options.searchKeyword)
        queryStringVariables.push(`searchKeyword=${options.searchKeyword}`);
      if (options.categorySlug)
        queryStringVariables.push(`categorySlug=${options.categorySlug}`);
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

  deletePost(id: any) {
    return this.http.delete(environment.backendBaseUrl + '/post/' + id);
  }
}
