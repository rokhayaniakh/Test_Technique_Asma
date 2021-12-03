import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,} from '@angular/common/http';
import { Post } from "../models/post"
import { Observable } from 'rxjs';
import { User } from '../models/auteur';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
// api_url="https://jsonplaceholder.typicode.com/";

getPost() {
  return this.http.get<Post[]>(environment.apiUrl+"posts");
}
getAuteur() {
  return this.http.get<User[]>(environment.apiUrl+"users");
}

detail(id: number): Observable<any> {
  return this.http.get(`${environment.apiUrl+"posts"}/${id}`);
}

}
