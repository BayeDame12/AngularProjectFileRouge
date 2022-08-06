import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iburger } from '../model/Iburger/iburger';
import { Icatalogue } from '../model/Icatalogue/icatalogue';
import { Imenu } from '../model/Imenu/imenu';
import { CatalogueService } from '../services/catalogue/catalogue.service';
import { PanierService } from '../services/panier/panier.service';

@Component({
  selector: 'app-catagolue',
  templateUrl: './catagolue.component.html',
  styleUrls: ['./catagolue.component.css']
})
//***********************PANIERSETLES OBSERVABLE********

export class CatagolueComponent implements OnInit {
//pour afficher tableau burger & menu sur catalogue
menu!:Imenu[];
catalogue!:Icatalogue[];
burger!:Iburger[];
panier:Iburger  []=[];
searchText!:any
  constructor(private Catalog:CatalogueService,private paniers:PanierService) {

  }

  ngOnInit(): void {
//ABONNEMENTSUBQCRIBE


    this.Catalog.getBurger().subscribe(
      data=>{
          this.burger=data;
          console.log(data);
      }
      );
    this.Catalog.getMenu().subscribe(
      data=>{
          this.menu=data;
          console.log(data);
      }
      );
    }


    items$:Observable<any>=this.paniers.items$;


    addToCart(product:any) {
      this.paniers.addToCart(product);
    }

  }
