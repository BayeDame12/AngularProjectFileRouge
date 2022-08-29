import { Injectable } from '@angular/core';
import { BehaviorSubject, take, map } from 'rxjs';
import { Iburger } from 'src/app/model/Iburger/iburger';
import { Imenu } from '../../model/Imenu/imenu';
import { Icommande } from '../../model/Icommande/icommande';
import { HttpClient } from '@angular/common/http';
import { Ilivraison } from 'src/app/model/Ilivraison/ilivraison';
import { ZonesService } from '../zone/zone.service';
@Injectable({
  providedIn: 'root'
})
export class PanierService {
  idZone!:number;
constructor(private http:HttpClient) {
  let existingCartItems = JSON.parse(localStorage.getItem('products')|| '[]');
  if (!existingCartItems) {
     existingCartItems = [];
  }
  this.itemsSubject.next(existingCartItems);
}

public itemsSubject = new BehaviorSubject<Iburger[]>([]);
items$ = this.itemsSubject.asObservable();



addToCart(product: Iburger) {

  this.items$.pipe(
    take(1),
    map((products) => {
      //*****************************************************tab */
      let tab= JSON.parse(localStorage.getItem("products" )|| '[]');
      console.warn(tab)
      if (tab) {
       product.quantite=1;
       let trouve=tab.find((param: { id: number; }) => param.id == product.id);
        if(!trouve){
            products.push(product);
        }
        else{
            products.forEach(element => {
            if(element.id == product.id)
            element.quantite++;
        });
      }
    localStorage.setItem('products', JSON.stringify(products));
     }
    }),
  ).subscribe();
//this.monPanier()
}


    supprimerCart(product: Iburger) {
      this.items$.pipe(
        take(1),
        map((products) => {
          products.splice(products.indexOf(product),1);
          localStorage.setItem('products', JSON.stringify(products));
        }),
      ).subscribe();
    //  this.monPanier()

    }

    totalPrix():number{

    let prixTotal=0
    this.items$.subscribe(products=>{
      products.forEach(element => {
       console.warn(element);
       this.monPanier()
        prixTotal+=element.prix*element.quantite;

        localStorage.setItem('products', JSON.stringify(products));
      });
    });
      return  prixTotal;
    }

sousPrix()
{
  let sousPrix=0
    this.items$.subscribe(products=>{
    products.forEach(element => {
     console.warn(element);
     sousPrix+=element.prix*element.quantite;
      console.log(sousPrix)
     localStorage.setItem('products', JSON.stringify(products));

      })
    })
  }



    increment(product:any , n:number){
      this.supprimerCart(product);
      product.quantite=product.quantite+n;
      this.addToCart(product);
      this.monPanier()

    }

//****************COMMANDE*********************
    command:{quantite:number,produit:string}[]=[];
    url1="http://127.0.0.1:8001/api/commandes";
  getIdZone(id:number){
    this.idZone=id
    console.log( this.idZone)
  }
  getCommandeLine(){
  this.items$.subscribe((data:any)=>{
    data.forEach((product:any)=>{
      this.command.push({
        "quantite": product.quantite,
        "produit": "/api/produits/"+product.id

      })
  //    console.log(this.command)
    })
  })
   return this.command;
  }

    valideCommande() {
    let body:Icommande=
     {
      "Produits":this.getCommandeLine(),
       "zone": {
        "id": this.idZone,
        "etatZone": "disponible"
      }

     }

  this.http.post<Icommande>(this.url1,body).subscribe()

  }
    monPanier(){
      this.items$.subscribe((e)=>{
      })
    }


}








