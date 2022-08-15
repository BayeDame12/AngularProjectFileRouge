import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iburger } from 'src/app/model/Iburger/iburger';
import { Imenu } from 'src/app/model/Imenu/imenu';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
            url='http://127.0.0.1:8001/api/';
          //  url='https://projectfilerouge.herokuapp.com/api/';

          constructor(private http:HttpClient) {

          }
          //**********RECUPERATION MENUS COTE BACK********** */
          getMenu():Observable<Imenu[]> {

            return this.http.get<Imenu[]>(this.url+'menus')
          }

          //**********RECUPERATION BURGERS COTE BACK********** */
          getBurger():Observable<Iburger[]> {
           return this.http.get<Iburger[]>(this.url+'burgers');
          }

          //**********RECUPERATION DETAILS MENUS COTE BACK********** */
          detailgetMenu(id:number):Observable<Imenu> {
            return this.http.get<Imenu>(this.url+'menus'+'/'+id);

          }
          //**********RECUPERATION DETAILS BURGERS COTE BACK********** */
          detailgetBurger(id:number):Observable<Iburger> {
           return this.http.get<Iburger>(this.url+'burgers'+'/'+id);
          }

          }






