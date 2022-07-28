import { Injectable } from '@angular/core';
import { Burger } from '../model/burger';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
//pour afficherlenombre de commande sur mon panier
snap:number=0;
panier:Burger  []=[];

  constructor() { }


     addPanier(element:any){
        this.snap++;
        this.panier.push(element)
     }
  getPanier(){
  return this.panier;
  }






















}
