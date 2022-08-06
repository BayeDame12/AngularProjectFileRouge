import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itailleboisson } from 'src/app/model/ItaillBoisson/itailleboisson';

@Injectable({
  providedIn: 'root'
})
export class TailleboissonService {

  url="http://127.0.0.1:8001/api/tailleboissons";

  constructor(private http:HttpClient) {
  }

  gettailleboisson():Observable<Itailleboisson[]> {
   return this.http.get<Itailleboisson[]>(this.url);
  }

  detailtailleboissons(id:number):Observable<any> {
   return this.http.get<any>(this.url+'/'+id);
  }
}
