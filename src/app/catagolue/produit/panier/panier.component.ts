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
idZon!:number;
sosprix:any=0
  ngOnInit(): void
  {
    this.somme = this.cartService.totalPrix();
    this.sosprix=this.cartService.sousPrix()

   
    this.commande=false;
    this.livrer=false;

   // console.warn(this.cartService.getCommandeLine())


    this.zones.getZones().subscribe(

      data=>{
        this.zonestab=data;
        //console.log(data);
        data.forEach(element =>{
       //   console.log(element);
                                        })
            }
  );
   }

  supprimerCart(product:any) {
    this.cartService.supprimerCart(product);
  }

//INCREMENTER ET DESINCREMENTER LES BOUTTON
  incrementq(q:any){

    if(q>0)
    {
      this.cpt++;
    }
    //localStorage.setItem('products', JSON.stringify(products));

    console.log(this.cpt+1)
  }
  decrementq(q:any){

    if(q>=0)
    {
      this.cpt--;
    }
   // localStorage.setItem('products', JSON.stringify(products));

    console.log(this.cpt-1)

  }
validCommand(){
  //(click)="(suptabcommande())"
     this.cartService.valideCommande()
     setTimeout(function(){
      window.location.reload();
    }, 1000);
}
  suptabcommande() {
    this.cartService.getCommandeLine().forEach(elem => {
      this.supprimerCart(elem)
    })
  }
  updateprix(){
    this.somme=this.cartService.totalPrix()
  }

  getIdZone(even){
    this.cartService.getIdZone(+even.target.value)
    this.idZon=even.target.value;
    console.log(this.idZon)
  }
  quantite(tabpanier,quant):any{

  }

}


