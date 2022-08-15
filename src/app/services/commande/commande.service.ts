import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Listcomande} from "../../model/Icommande/listcomande";
import {Imenu} from "../../model/Imenu/imenu";
import { Ilivraison } from 'src/app/model/Ilivraison/ilivraison';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  url="http://127.0.0.1:8001/api/commandes";
  constructor(private http:HttpClient) {
  }

  getLigncommande():Observable<Listcomande[]>{
    return this.http.get<Listcomande[]>(this.url);
  }


      detailgetCommande(id:number):Observable<Listcomande> {
      return this.http.get<Listcomande>(this.url+'/'+id);

    }

  Ajour(id:number,body:object)
  {
    this.http.put<any>(this.url+'/'+id,body).subscribe()
    console.log(body)
  }


}
