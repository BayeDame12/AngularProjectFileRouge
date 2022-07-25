import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import{ Comment}from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
url="https://jsonplaceholder.typicode.com/comments";
  constructor(private http:HttpClient) { }
getComment():Observable<Comment[]> {
 return this.http.get<Comment[]>(this.url);
}
}
