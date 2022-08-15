import { Component, OnInit } from '@angular/core';
import { Listcomande } from 'src/app/model/Icommande/listcomande';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { ZonesService } from 'src/app/services/zone/zone.service';

@Component({
  selector: 'app-lister-admin',
  templateUrl: './lister-admin.component.html',
  styleUrls: ['./lister-admin.component.css']
})
export class ListerAdminComponent implements OnInit {
  listcommandes!:Listcomande;
  listCom!:Listcomande[];
  searchText:any
  zoness!:any[];

  // dame!:string;
  constructor(private listcommande:CommandeService,private zones:ZonesService) { }

  ngOnInit(): void {
    this.listcommande.getLigncommande().subscribe(data=>{
      this.listCom=data;
        console.warn(data)
        this.listCom.forEach(commande=>{
        })
        })

        this.zones.getZones().subscribe(

          data=>{
            this.zoness=data;
            console.log(data);
            data.forEach(element =>{
              console.log(element);
                                            })
                }
      );
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


