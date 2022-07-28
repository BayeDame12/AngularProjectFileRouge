import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Burger } from 'src/app/model/burger';
import { Menu } from 'src/app/model/menu';
import { PanierService } from 'src/app/services/panier.service';
import { CatagolueComponent } from '../../catagolue.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent  {

  constructor(private cartService: PanierService) { }
  items$:Observable<any>=this.cartService.items$;
  somme:number=0;
   ngOnInit(): void
   {
      this.cartService.totalPrix().subscribe((som)=>{

      som.forEach(element => {
     this.somme+=element.prix*element.quantity;
     });
    });
   }

  supprimerCart(product:any) {
    this.cartService.supprimerCart(product);
  }

}


