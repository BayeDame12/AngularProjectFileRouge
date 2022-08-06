import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ifrite } from 'src/app/model/Ifrite/ifrite';

@Injectable({
  providedIn: 'root'
})
export class FritesService {

  url='http://127.0.0.1:8001/api/frites';

  constructor(private http:HttpClient) {

  }

  getFrites():Observable<Ifrite[]> {
   return this.http.get<Ifrite[]>(this.url);
  }

  detailgetFrite(id:number):Observable<any> {
   return this.http.get<any>(this.url+'/'+id);
  }

}
