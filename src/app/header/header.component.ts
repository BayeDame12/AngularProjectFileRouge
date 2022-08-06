import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierService } from '../services/panier/panier.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private paniers:PanierService) { }

  ngOnInit(): void {

  }

  items$:Observable<any>=this.paniers.items$;


  addToCart(product:any) {
    this.paniers.addToCart(product);
  }

}
