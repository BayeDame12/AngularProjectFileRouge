import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Burger } from '../model/burger';
import { Catalogue } from '../model/catalogue';
import { Menu } from '../model/menu';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
 url='http://127.0.0.1:8001/api/';

          //  urlA="https://herokujalibatest.herokuapp.com/api/";
          constructor(private http:HttpClient) {

          }
          //**********RECUPERATION MENUS COTE BACK********** */
          getMenu():Observable<Menu[]> {
            return this.http.get<Menu[]>(this.url+'menus');
          }

          //**********RECUPERATION BURGERS COTE BACK********** */
          getBurger():Observable<Burger[]> {
           return this.http.get<Burger[]>(this.url+'burgers');
          }

          //**********RECUPERATION DETAILS MENUS COTE BACK********** */
          detailgetMenu(id:number):Observable<Menu> {
           return this.http.get<Menu>(this.url+'menus'+'/'+id);
          }

          //**********RECUPERATION DETAILS BURGERS COTE BACK********** */
          detailgetBurger(id:number):Observable<Burger> {
           return this.http.get<Burger>(this.url+'burgers'+'/'+id);
          }


}
