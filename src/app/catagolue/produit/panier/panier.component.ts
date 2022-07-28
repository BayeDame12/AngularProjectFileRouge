import { Component, OnInit } from '@angular/core';
import { Burger } from 'src/app/model/burger';
import { Menu } from 'src/app/model/menu';
import { PanierService } from 'src/app/services/panier.service';
import { CatagolueComponent } from '../../catagolue.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

// tabpanier
tabpanier:Burger  []=[];

  constructor(private afichepanier:PanierService) { }

  ngOnInit(): void {
     this.tabpanier=this.afichepanier.getPanier();

console.log(this.tabpanier);

  }
}
