import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Burger } from '../model/burger';
import { Menu } from '../model/menu';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

url1="http://localhost:3000/menu";
url="http://localhost:3000/burger";
constructor(private http:HttpClient) {

}
getMenu():Observable<Menu[]> {
 return this.http.get<Menu[]>(this.url1);
}

getBurger():Observable<Burger[]> {
 return this.http.get<Burger[]>(this.url);
}


detailgetMenu(id:number):Observable<any> {
 return this.http.get<any>(this.url1+'/'+id);
}

detailgetBurger(id:number):Observable<any> {
 return this.http.get<any>(this.url+'/'+id);
}


}
