import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ilivreur} from "../../model/Ilivreur/ilivreur";
import { Ilivraison } from 'src/app/model/Ilivraison/ilivraison';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  idLivreur!:number;


  url="http://127.0.0.1:8001/api/livreurs"
  url1="http://127.0.0.1:8001/api/livraisons"

  constructor(private http:HttpClient) {
  }
//*********LIVREUR*********************

  getLivreur():Observable<Ilivreur[]> {
    return this.http.get<Ilivreur[]>(this.url);
  }

  detailgetLivreur(id:number):Observable<any> {
    return this.http.get<any>(this.url+'/'+id);
  }
//*********LIVRAISON*********************
  getLivraison():Observable<Ilivraison[]> {
    return this.http.get<Ilivraison[]>(this.url1);
  }

  detailgetLivraison(id:number):Observable<any> {
    return this.http.get<any>(this.url1+'/'+id);
  }


  commandeAlivrerID:object[]=[];

  addCommandeAlivre(commmande:any)
  {

   this.commandeAlivrerID.push({
    "id": "api/commandes/"+commmande,
  });


  }
  removeCommandeAlivre(commmande:any)
  {

   this.commandeAlivrerID.splice(this.commandeAlivrerID.indexOf({
    "id": "api/commandes/"+commmande,
  }), 1);

  }

  getIdLiv(id:number){
    this.idLivreur=id
  }

       valideLivraison() {
        let body=
         {
          "telephoneLivraison": 776512111,
          "commandes": this.commandeAlivrerID,
          "livreur": {
            'id':"api/livreurs/"+this.idLivreur,
            "etatLivreur": "indisponible"
          }
         }
         console.log(body)
      this.http.post<Ilivraison>(this.url1,body).subscribe()

      }

      Ajoure(id:number,body:object)
      {     
        this.http.put<any>(this.url+'/'+id,body).subscribe(e=>{
          console.log(e);
          
        })
      }
}
