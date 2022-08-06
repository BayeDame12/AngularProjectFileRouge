import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImenuBurger } from 'src/app/model/ImenuBurger/imenu-burger';

@Injectable({
  providedIn: 'root'
})
export class MenuBurgerService {

  url="http://127.0.0.1:8001/api/menu_burgers";

  constructor(private http:HttpClient) {
  }

  getMenuBurger():Observable<ImenuBurger[]> {
   return this.http.get<ImenuBurger[]>(this.url);
  }

  detailgetMenuBurger(id:number):Observable<any> {
   return this.http.get<any>(this.url+'/'+id);
  }
}
