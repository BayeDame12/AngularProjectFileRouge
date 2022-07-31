import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frites } from '../model/frites';

@Injectable({
  providedIn: 'root'
})
export class FritesService {

  url="http://localhost:3000/frites";

  constructor(private http:HttpClient) {

  }

  getFrites():Observable<Frites[]> {
   return this.http.get<Frites[]>(this.url);
  }

  detailgetFrite(id:number):Observable<any> {
   return this.http.get<any>(this.url+'/'+id);
  }

}
