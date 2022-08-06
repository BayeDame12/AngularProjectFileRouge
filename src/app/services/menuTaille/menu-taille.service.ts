import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImenuTaille } from '../../model/ImenuBoisson/imenuTaille';

@Injectable({
  providedIn: 'root'
})
export class MenuTailleService {

  url="http://127.0.0.1:8001/api/menu_tailles";

  constructor(private http:HttpClient) {
  }

  getMenuTaille():Observable<ImenuTaille[]> {
   return this.http.get<ImenuTaille[]>(this.url);
  }

  detailgetMenuTaille(id:number):Observable<any> {
   return this.http.get<any>(this.url+'/'+id);
  }
}
