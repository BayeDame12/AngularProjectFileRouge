import { Component, OnInit } from '@angular/core';
import { Listcomande } from 'src/app/model/Icommande/listcomande';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { ZonesService } from 'src/app/services/zone/zone.service';

@Component({
  selector: 'app-comandes',
  templateUrl: './comandes.component.html',
  styleUrls: ['./comandes.component.css']
})
export class ComandesComponent implements OnInit {
  zoness!:any[];
  listcommandes!:Listcomande;
  listCom!:Listcomande[];
  comAnnul!:Listcomande;
  searchText!:any

  constructor(private zones:ZonesService,private listcommande:CommandeService) { }

  ngOnInit(): void {

    //this.searchText=this.formateDateToday();

    this.listcommande.getLigncommande().subscribe(data=>{
      this.listCom=data;
      this.zones.getZones().subscribe(

        data=>{
          this.zoness=data;
          console.log(data);
          data.forEach(element =>{
            console.log(element);
                                          })
              }
    );
        this.listCom.forEach(commande=>{
        this.comAnnul=commande;

     })
        })



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


