import { Injectable } from '@angular/core';
import { BehaviorSubject, take, map } from 'rxjs';
import { Iburger } from 'src/app/model/Iburger/iburger';
import { Imenu } from '../../model/Imenu/imenu';
import { Icommande } from '../../model/Icommande/icommande';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PanierService {

constructor(private http:HttpClient) {
  let existingCartItems = JSON.parse(localStorage.getItem('products')|| '[]');
  if (!existingCartItems) {
    existingCartItems = [];
  }
  this.itemsSubject.next(existingCartItems);
}

private itemsSubject = new BehaviorSubject<Iburger[]>([]);
items$ = this.itemsSubject.asObservable();


// product=Object.assign({},this.product,{'quantity':1})

addToCart(product: Iburger) {

  console.warn(product);

  this.items$.pipe(
    take(1),
    map((products) => {
      //*****************************************************tab */
      let tab= JSON.parse(localStorage.getItem("products" )|| '[]');
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

}


    supprimerCart(product: Iburger) {
      this.items$.pipe(
        take(1),
        map((products) => {
          products.splice(products.indexOf(product),1);
          localStorage.setItem('products', JSON.stringify(products));
        }),
      ).subscribe();

    }

    totalPrix(){
    return this.items$;
    }

    increment(product:any , n:number){
      this.supprimerCart(product);
      product.quantite=product.quantite+n;
      this.addToCart(product);

    }

//COMMANDE*********************
    command:Array<any>=[];
    url="http://127.0.0.1:8001/api/commandes";

  getCommandeLine(){
  this.items$.subscribe((data:any)=>{
    data.forEach((product:any)=>{

  this.command.push({
  "produit": product,
  "quantite": product.quantite})

    })
  })
   return this.command;
  }
    postCommande(body:Icommande){
    this.http.post<Icommande>(this.url,body).subscribe()
    }


    getPanier(){

    return JSON.parse(localStorage.getItem('products') || '[]')
    }





  }





