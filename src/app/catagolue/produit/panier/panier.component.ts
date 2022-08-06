import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Izone } from 'src/app/model/Izone/izone';
import { PanierService } from 'src/app/services/panier/panier.service';
import { ZonesService } from 'src/app/services/zone/zone.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent  {

  constructor(private cartService: PanierService, private zones:ZonesService ) { }

  items$:Observable<any[]>=this.cartService.items$;
  commande!:boolean;
  livrer!:boolean;
  somme:number=0;
  zonestab!:Izone[]
  cpt:number=0;



  ngOnInit(): void
  {

    this.commande=false;
    this.livrer=false;

    this.cartService.totalPrix().subscribe((som)=>{
      som.forEach(element => {
        console.warn(element);
        this.somme+=element.prix*element.quantite;
      });
    });


    this.zones.getZones().subscribe(

      data=>{
        this.zonestab=data;
        console.log(data);
        data.forEach(element =>{
          console.log(element);
                                        })
            }
  );
   }

  supprimerCart(product:any) {
    this.cartService.supprimerCart(product);
  }

  incrementq(q:any,a:any){

    if(q<=a)
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

  postCommande(){

  }
  prepareCommande(){
   let tabpanier=this.cartService.getPanier();

  }
}


