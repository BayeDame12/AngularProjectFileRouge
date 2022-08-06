import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Iburger } from 'src/app/model/Iburger/iburger';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';
import { PanierService } from 'src/app/services/panier/panier.service';


@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.css']
})
export class DetailBurgerComponent implements OnInit {
// @Input()TestBed:string
burgerid!:Iburger;

constructor(private detail:CatalogueService,private acRoute:ActivatedRoute,private addpan:PanierService) {

}
ngOnInit(): void {

  const idetail:number =this.acRoute.snapshot.params['id'];
  this.detail.detailgetBurger(idetail).subscribe(
  data=>{
      this.burgerid=data;
      console.log(data);
    }
    );
  }
  addToCart(product:any) {
    this.addpan.addToCart(product);
  }
}
