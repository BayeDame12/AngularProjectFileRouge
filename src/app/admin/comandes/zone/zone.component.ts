import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listcomande } from 'src/app/model/Icommande/listcomande';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { LivreurService } from 'src/app/services/livreurs/livreur.service';
import { ZonesService } from 'src/app/services/zone/zone.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  listcommandes!:any;
  listCom!:Listcomande[];
  zoness!:any[];
  commandes!:any[];
  livreures!:any[];
  mbaye!:any
  monInput!:any
  tabCommandeLiv:number[];
  idLiv!:number;
  hide:boolean=true
  constructor(private listcommande:CommandeService,private zones:ZonesService,private acRoute:ActivatedRoute,private livreurs:LivreurService) { }

  ngOnInit(): void {
    console.log(this.monInput)
    const idetail:number =this.acRoute.snapshot.params['id'];
    console.log(idetail)
    this.zones.detailgetZones(idetail).subscribe(data=>{
    this.zoness=data;
    this.mbaye=this.zoness['commandes'];
    console.log(this.zoness)
    this.mbaye.forEach(elem=>{
        console.log(elem.id)
      })


 })

 this.livreurs.getLivreur().subscribe(data=>{
  this.livreures=data;
  console.log(this.livreures);


})

  }
  getId(val){
           if (val.target.checked) {
           this.livreurs.addCommandeAlivre(+val.target.value)
             this.hide=false

     }
else {
      this.livreurs.removeCommandeAlivre(+val.target.value)
     }
     this.tabCommandeLiv=val.target.value
     console.warn(val.target.value );
    this.hide=false

  }

  getIdLiv(val)
  {
    val.target.value
    this.livreurs.getIdLiv(+val.target.value )
    this.idLiv=val.target.value;
    console.warn(val.target.value );

  }

  bout()
  {
    if (this.tabCommandeLiv.length==0){
      return false
    }
     return true
  }


  valideLivraison()
{
  this.livreurs.valideLivraison();
}






}
