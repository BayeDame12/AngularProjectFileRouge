import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iburger } from 'src/app/model/Iburger/iburger';

@Injectable({
  providedIn: 'root'
})
export class BurgersService {
  url="http://127.0.0.1:8001/api/burgers";

  constructor(private http:HttpClient) {
  }

  getBoissons():Observable<Iburger[]> {
   return this.http.get<Iburger[]>(this.url);
  }

  detailgetBoisson(id:number):Observable<any> {
   return this.http.get<any>(this.url+'/'+id);
  }
}
