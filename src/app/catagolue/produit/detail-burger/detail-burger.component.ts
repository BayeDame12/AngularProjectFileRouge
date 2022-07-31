import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Burger } from 'src/app/model/burger';
import { Frites } from 'src/app/model/frites';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { FritesService } from 'src/app/services/frites.service';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.css']
})
export class DetailBurgerComponent implements OnInit {
// @Input()TestBed:string
burgerid!:Burger;

constructor(private detail:CatalogueService,private acRoute:ActivatedRoute) {

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
}
