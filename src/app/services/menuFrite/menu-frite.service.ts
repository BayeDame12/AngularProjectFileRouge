import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImenuFrite } from 'src/app/model/ImenuFrite/imenu-frite';

@Injectable({
  providedIn: 'root'
})
export class MenuFriteService {

  url="http://127.0.0.1:8001/api/menu_frites";

  constructor(private http:HttpClient) {
  }

  getMenuFrite():Observable<ImenuFrite[]> {
   return this.http.get<ImenuFrite[]>(this.url);
  }

  detailgetMenuFrite(id:number):Observable<any> {
   return this.http.get<any>(this.url+'/'+id);
  }}
