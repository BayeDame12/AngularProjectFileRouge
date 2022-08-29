import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande/commande.service';

@Component({
  selector: 'app-id-comande',
  templateUrl: './id-comande.component.html',
  styleUrls: ['./id-comande.component.css']
})
export class IdComandeComponent implements OnInit {
commandeDetail!:any
clientDetail!:any
clientProd!:any
Prod!:any
  constructor(private detail:CommandeService,private acRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const idetail:number =this.acRoute.snapshot.params['id'];
    this.detail.detailgetCommande(idetail).subscribe(
    data=>{

        this.commandeDetail=data;

               
        this.clientDetail=this.commandeDetail.client
        this.clientProd=this.commandeDetail.Produits.forEach(element => {        
          
console.log(element);

          this.Prod=element.produit
        });
      }
        
      );

}
}

