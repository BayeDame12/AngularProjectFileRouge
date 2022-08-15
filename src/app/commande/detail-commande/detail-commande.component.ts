import { Component, OnInit } from '@angular/core';
import {CommandeService} from "../../services/commande/commande.service";
import {Icommande} from "../../model/Icommande/icommande";
import {CatalogueService} from "../../services/catalogue/catalogue.service";
import {ActivatedRoute} from "@angular/router";
import {Listcomande} from "../../model/Icommande/listcomande";
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {
listcommandes!:Listcomande;
listCom!:Listcomande[];
comAnnul!:Listcomande;
  constructor(private listcommande:CommandeService,private acRoute:ActivatedRoute,private cartService: PanierService,) { }

  ngOnInit(): void {
    const idetail:number =this.acRoute.snapshot.params['id'];
    console.log(idetail)
 this.listcommande.detailgetCommande(idetail).subscribe(data=>{
   this.listcommandes=data;
   console.log(this.listcommandes)
 })


 this.listcommande.getLigncommande().subscribe(data=>{
   this.listCom=data;
     console.warn(data)
     this.listCom.forEach(commande=>{
     this.comAnnul=commande;
       console.warn(this.comAnnul)

     })

})

  }
  supprimerCart(product:any) {
    this.cartService.supprimerCart(product);
  }

  suptabcommande() {
    this.cartService.getCommandeLine().forEach(elem => {
      this.supprimerCart(elem)
  console.log(this.supprimerCart(elem));

    })
  }

  validCommand(){

    this.cartService.valideCommande()
  console.log(this.cartService.valideCommande())
  }
    getIdcommande(id:number){
    this.listcommande.Ajour(id,{"etatCommande":"annuler"})
    }

}
