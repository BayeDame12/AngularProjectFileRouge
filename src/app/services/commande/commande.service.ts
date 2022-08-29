import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Listcomande} from "../../model/Icommande/listcomande";
import {Iclient} from "../../model/Iclients/iclient";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  url="http://127.0.0.1:8001/api/commandes";
  url1="http://127.0.0.1:8001/api/clients";

  constructor(private http:HttpClient) {
  }

  getLigncommande():Observable<Listcomande[]>{
    return this.http.get<Listcomande[]>(this.url);
  }
  detailgetCommande(id:number):Observable<Listcomande> {
    return this.http.get<Listcomande>(this.url+'/'+id);
  }
//*************************CLIENTS***************************

  getClient(id:number):Observable<Iclient> {
      return this.http.get<Iclient>(this.url1+'/'+id);
    }
  LignClient():Observable<Iclient[]>{
    return this.http.get<Iclient[]>(this.url1);
  }




  Ajour(id:number,body:object)
  {
    console.log(body)
    this.http.put<any>(this.url+'/'+id,body).subscribe()
  }


}
