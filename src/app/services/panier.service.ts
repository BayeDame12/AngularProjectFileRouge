import { Injectable } from '@angular/core';
import { BehaviorSubject, take, map } from 'rxjs';
import { Burger } from '../model/burger';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

constructor() {
  let existingCartItems = JSON.parse(localStorage.getItem('products')|| '[]');
  if (!existingCartItems) {
    existingCartItems = [];
  }
  this.itemsSubject.next(existingCartItems);
}

private itemsSubject = new BehaviorSubject<Burger[]>([]);
items$ = this.itemsSubject.asObservable();


// product=Object.assign({},this.product,{'quantity':1})
addToCart(product: Burger) {

console.warn(product);

  this.items$.pipe(
    take(1),
    map((products) => {
//*****************************************************tab */
     let tab= JSON.parse(localStorage.getItem("products" )|| '[]');
     if (tab) {

      let trouve=tab.find((param: { id: number; }) => param.id == product.id);
      if(!trouve){
        products.push(product);
      }
      else{
        products.forEach(element => {
          if(element.id == product.id)
console.warn(element.quantity);

          element.quantity++;


        });
      }
    localStorage.setItem('products', JSON.stringify(products));
     }


    }),
  ).subscribe();

}


supprimerCart(product: Burger) {
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

increment(product:Burger, n:number){
  this.supprimerCart(product);
  product.quantity=product.quantity+n;
  this.addToCart(product);
}

}






