import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Burger } from '../model/burger';
import { Menu } from '../model/menu';

import { CatalogueService } from '../services/catalogue.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-catagolue',
  templateUrl: './catagolue.component.html',
  styleUrls: ['./catagolue.component.css']
})
//***********************PANIERSETLES OBSERVABLE********

export class CatagolueComponent implements OnInit {
//pour afficher tableau burger & menu sur catalogue
menu!:Menu[];
burger!:Burger[];
panier:Burger  []=[];
  constructor(private Catalog:CatalogueService,private paniers:PanierService) {

  }

  ngOnInit(): void {
//ABONNEMENTSUBQCRIBE
    this.Catalog.getMenu().subscribe(
      data=>{
          this.menu=data;
          console.log(data);
      }
      );
    this.Catalog.getBurger().subscribe(
      data=>{
          this.burger=data;
          console.log(data);
      }
      );

    }


    items$:Observable<any>=this.paniers.items$;


    addToCart(product:any) {
      this.paniers.addToCart(product);
    }

}

