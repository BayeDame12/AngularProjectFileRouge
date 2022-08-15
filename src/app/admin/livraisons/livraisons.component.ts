import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { ZonesService } from 'src/app/services/zone/zone.service';
import {createObject} from "rxjs/internal/util/createObject";
import {LivreurService} from "../../services/livreurs/livreur.service";

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
  constructor(private tcommande:CommandeService,private acRoute:ActivatedRoute,private zones:ZonesService,private livraisons:LivreurService) { }

  ngOnInit(): void {

this.livraisons.getLivraison().subscribe(data=>{
  this.livraison=data;
  console.log(this.livraison)

  this.livraison.forEach(tab=>{
    this.livre=tab;
  })

});



  }

}
