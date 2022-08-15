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

 this.boutton=false;
 this.Ajouter=false;
 this.nombre;
 this.numb=1;
 this.commande=false;


// const idMenu=this.menuDetailer.snapshot
// console.log(idMenu);


    const idetail:number =this.acRoute.snapshot.params['id'];
console.warn(idetail);

  this.addpan.totalPrix().subscribe ((som)=>{
  som.forEach((element)=>{
  console.log(element);

    this.somme+=element.prix*element.quantite;

  })
})


    this.detail.detailgetMenu(idetail).subscribe(
    data=>{
        this.menu=data;
    console.warn(data);

        this.menuTai=data.menutailles['0']['taille'];
         console.log(  data.menutailles['0']['taille']);
         this.Tai=data.menutailles['0']
         console.log(  data.menutailles['0']);
         this.frite=data.Frites['0']
         console.log(this.frite);
         this.fritte=data.Frites['0']['frite']
         console.log(this.fritte);

         this.burger=data.Burgers['0']
         console.log(this.burger);
         this.burgger=data.Burgers['0']['burger']
         this.boiso=data.menutailles['0']['taille']['tailleBoissons']['0']['boisson']
console.log(this.boiso);

      }
      );

    this.fritetab.getFrites().subscribe(
          data=>{
                      this.frites=data;
                      console.log(data);
                      data.forEach(element =>{
        console.log(element)
                                        })
                }
      );

    this.boisontab.getBoissons().subscribe(
          data=>{
                      this.boissons=data;
                      console.log(data);
                      data.forEach(elements =>{
                     console.log(elements);

                                            })
                }
      );



      this.menuFrites.getMenuFrite().subscribe(
        data=>{
                    this.menuFrite=data;
                    console.log(data);
                    data.forEach(element =>{
                    console.log(element);

                                      })
              }
    );


      this.menuBurgers.getMenuBurger().subscribe(
        data=>{
                    this.menuBurger=data;
                    console.log(data);
                    data.forEach(element =>{
                      console.log(element);

                                      })
              }
    );



  this.menuTailles.getMenuTaille().subscribe(
        data=>{
                    this.menuTaille=data;
                    console.log(data);
                    data.forEach(elements =>{
                      console.log(elements);


                                          })
              }
    );

  this.tailleboiss.gettailleboisson().subscribe(
        data=>{
                    this.tailleboisse=data;
                    console.log(data);
                    data.forEach(elements =>{
                      console.log(elements);


                                          })
              }
    );

            }
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

