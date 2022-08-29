import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { LivreurService } from 'src/app/services/livreurs/livreur.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {

  livraison!:any;
liv!:any[];
tabl!:any[];
infcom!:any;
  constructor(private acRoute:ActivatedRoute,private livraisons:LivreurService,private listcommande:CommandeService,private changEtatLiv:LivreurService) { }
  
  ngOnInit(): void {

    const tablivraison= this.acRoute.snapshot.params['id'];
      this.livraisons.detailgetLivreur(tablivraison).subscribe(data=>{
      this.livraison=data;
      console.log(this.livraison)
      this.livraison.livraisons.forEach(element => {

      //  console.warn(element.commandes);
        this.liv=element;

        this.tabl=element.commandes;
        element.commandes.forEach(element => {
         // console.warn(element);
         this.infcom=element;
        });
      });



    });

  }
  changeEtatPayer(item:any){
    if (item.etatCommande =='En Cours De Livraison'){
      this.listcommande.Ajour(item.id,{'etatCommande': "Payer"})

    }

  }
  changeEtatLivreur(itemLiv:any){

    if (itemLiv.etatLivreur =='indisponible'){
      this.changEtatLiv.Ajoure(itemLiv.id,{'etatLivreur': "disponible"})
      setTimeout(function(){
        window.location.reload();
      }, 1000);

    }
    

  }

  changeEtatNonpayer(item:any){
    if (item.etatCommande =='En Cours De Livraison'){
      this.listcommande.Ajour(item.id,{'etatCommande': "Annuler"})
      setTimeout(function(){
        window.location.reload();
      }, 1000);
    }

  }
}
