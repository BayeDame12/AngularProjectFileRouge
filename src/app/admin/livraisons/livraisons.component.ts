import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { ZonesService } from 'src/app/services/zone/zone.service';
import {createObject} from "rxjs/internal/util/createObject";
import {LivreurService} from "../../services/livreurs/livreur.service";
import { Listcomande } from 'src/app/model/Icommande/listcomande';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {
  tcommandes!:any[];
  zoness!:any[];
  livraison!:any[];
  livre!:any;
  listCom!:Listcomande[];
  livreure!:any
  searchText:any=this.formateDateToday()

  constructor(private tcommande:CommandeService,private acRoute:ActivatedRoute,private zones:ZonesService,private livraisons:LivreurService,private listcommande:CommandeService) { }

  ngOnInit(): void {

    console.warn(this.searchText)
    this.livraisons.getLivraison().subscribe(data=>{
      this.livraison=data;
      console.log(this.livraison)

      this.livraison.forEach(tab=>{
        // console.log(this.livre);
        tab.commandes.forEach(element => {
          this.livre=element

          // console.log(element);

        });
      })

    });



  }
  getIdcommande(id:number){
    this.listcommande.Ajour(id,{"etatCommande":"annuler"})
    }
  formateDateToday(){
    let date=new Date();
    let day =date.toLocaleDateString().slice(0,2);
    let month = date.toLocaleDateString().slice(3,5);
    let year= date.toLocaleDateString().slice(6);
    return year+"-"+month+"-"+day ;

  }

}
