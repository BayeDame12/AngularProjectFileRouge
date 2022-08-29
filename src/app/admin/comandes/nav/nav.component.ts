import { Component, OnInit } from '@angular/core';
import { Listcomande } from 'src/app/model/Icommande/listcomande';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { ZonesService } from 'src/app/services/zone/zone.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  zoness!:any[];
  listcommandes!:Listcomande;
  listCom!:Listcomande[];
  comAnnul!:Listcomande;
  constructor(private zones:ZonesService,private listcommande:CommandeService) { }

  ngOnInit(): void {

    this.listcommande.getLigncommande().subscribe(data=>{
      this.listCom=data;
      this.zones.getZones().subscribe(

        data=>{
          this.zoness=data;
          data.forEach(element =>{
                                          })
              }
    );
        this.listCom.forEach(commande=>{
        this.comAnnul=commande;

     })
        })
  }

}
