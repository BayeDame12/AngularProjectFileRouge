import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iboisson } from 'src/app/model/Iboisson/iboisson';

@Injectable({
  providedIn: 'root'
})
export class BoissonsService {

  url="http://127.0.0.1:8001/api/boissons";

  constructor(private http:HttpClient) {
  }

  getBoissons():Observable<Iboisson[]> {
   return this.http.get<Iboisson[]>(this.url);
  }

  detailgetBoisson(id:number):Observable<any> {
   return this.http.get<any>(this.url+'/'+id);
  }

}
