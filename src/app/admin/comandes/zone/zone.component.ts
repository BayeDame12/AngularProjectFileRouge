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
  searchText!:any
  hideCommande!:boolean
  hideLivreur!:boolean

  constructor(private listcommande:CommandeService,private zones:ZonesService,private acRoute:ActivatedRoute,private livreurs:LivreurService) { }

  ngOnInit(): void {
    //this.searchText=this.formateDateToday();

    this.listcommande.getLigncommande().subscribe(data=>{
      this.listCom=data;
      console.log(this.listCom)
    })

    const idetail:number =this.acRoute.snapshot.params['id'];
    this.zones.detailgetZones(idetail).subscribe(data=>{
    this.zoness=data;
      console.log(this.zoness)





 })

 this.livreurs.getLivreur().subscribe(data=>{
  this.livreures=data;


})

  }
  getId(val){
           if (val.target.checked) {
           this.livreurs.addCommandeAlivre(+val.target.value)
             this.hideCommande=true

     }
else {
      this.livreurs.removeCommandeAlivre(+val.target.value)
     }
     this.tabCommandeLiv=val.target.value
    console.log(this.tabCommandeLiv['etatCommande'])
    this.hideCommande=false
    console.log(this.hideCommande)
  }

  getIdLiv(val)
  {
    val.target.value
    this.livreurs.getIdLiv(+val.target.value )
    this.idLiv=val.target.value;
    this.hideLivreur=false
    console.log(this.hideLivreur)

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
  setTimeout(function(){
    window.location.reload();
  }, 1000);
}


  formateDateToday(){
    let date=new Date();
    let day =date.toLocaleDateString().slice(0,2);
    let month = date.toLocaleDateString().slice(3,5);
    let year= date.toLocaleDateString().slice(6);
    return year+"-"+month+"-"+day ;

    //2022-08-10
  }




}
