import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boissons } from '../model/boissons';

@Injectable({
  providedIn: 'root'
})
export class BoissonsService {
  url="http://localhost:3000/boissons";

  constructor(private http:HttpClient) {
  }

  getBoissons():Observable<Boissons[]> {
   return this.http.get<Boissons[]>(this.url);
  }

  detailgetBoisson(id:number):Observable<any> {
   return this.http.get<any>(this.url+'/'+id);
  }

}
