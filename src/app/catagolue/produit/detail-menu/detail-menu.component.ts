import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iboisson } from 'src/app/model/Iboisson/iboisson';
import { Ifrite } from 'src/app/model/Ifrite/ifrite';
import { Imenu } from 'src/app/model/Imenu/imenu';
import { ImenuBurger } from 'src/app/model/ImenuBurger/imenu-burger';
import { ImenuFrite } from 'src/app/model/ImenuFrite/imenu-frite';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';
import { BoissonsService } from 'src/app/services/menu/boissons.service';
import { FritesService } from 'src/app/services/menu/frites.service';
import { MenuBurgerService } from 'src/app/services/menuBurger/menu-burger.service';
import { MenuFriteService } from 'src/app/services/menuFrite/menu-frite.service';
import { MenuTailleService } from 'src/app/services/menuTaille/menu-taille.service';

import { PanierService } from 'src/app/services/panier/panier.service';
import { TailleboissonService } from 'src/app/services/taillBoisson/tailleboisson.service';
import { ImenuTaille } from '../../../model/ImenuBoisson/imenuTaille';
import { Itailleboisson } from '../../../model/ItaillBoisson/itailleboisson';
import {elementAt} from "rxjs";


@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

//pour afficher details burger & menu sur catalogue
menu!:Imenu;
menuTaille!:ImenuTaille[];
menuFrite!:ImenuFrite[];
menuBurger!:ImenuBurger[];
tailleboisse!:Itailleboisson[];
boiso!:any;
// menuid!:Imenu;
boissons!:Iboisson[];
frites!:Ifrite[];
boutton!:boolean;
Ajouter!:boolean;
nombre!:boolean;
numb!:number;
cpt:number=1;
somme:number=0;
menuTai!:any;
Tai!:any;
frite!:any;
fritte!:any;
burger!:any;
burgger!:any;
commande!:boolean;
constructor( private menuDetailer:ActivatedRoute,private detail:CatalogueService,private acRoute:ActivatedRoute,private addpan:PanierService,
  private boisontab:BoissonsService,private fritetab:FritesService,private tailleboiss:TailleboissonService
  , private menuBurgers:MenuBurgerService, private menuFrites:MenuFriteService, private menuTailles:MenuTailleService) {

}
ngOnInit(): void {

  this.boutton = false;
  this.Ajouter = false;
  this.nombre;
  this.numb = 1;
  this.commande = false;


  const idetail: number = this.acRoute.snapshot.params['id'];

  this.detail.detailgetMenu(idetail).subscribe(
    data => {
      this.menu = data;
      console.log(data);

      this.menu.Burgers.forEach(element => {
        this.burger = element;
      });
      this.menu.Frites.forEach(element => {
        this.frite = element;
        //   console.log(this.frite)
      });
      this.menuTai=this.menu.menutailles['0']
      console.log(this.menuTai.taille)

    }
  );



}



  // this.tailleboiss.gettailleboisson().subscribe(
  //       data=>{
  //                   this.tailleboisse=data;
  //                   // console.log(data);
  //                   data.forEach(elements =>{
  //                     // console.log(elements);


  //                                         })
  //             }
  //   );


addToCart(product:any) {
  this.addpan.addToCart(product);
}
      click:boolean=true;
      ajouterPanier(param:boolean){
          if (param==true) {
            this.click =param;
          }
          else{
            this.click = !param;
  }
  }



  increment(product:any ,n:number){
    console.log(this.addpan.increment(product,n));
    ;
  }
//INCREMENTER ET DESINCREMENTER LES BOUTTON
      incrementq(q:any){

      if(q>0)
      {
        this.cpt++;
      }
    }
    decrementq(q:any){

      if(q>=0)
      {
        this.cpt--;
      }
    }
//BLOCK ET DEBLOQUER BOUTTON LES BOUTTON




  }

