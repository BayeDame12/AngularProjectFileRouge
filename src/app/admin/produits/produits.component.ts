import { Component, OnInit } from '@angular/core';
import { Listcomande } from 'src/app/model/Icommande/listcomande';
import { CommandeService } from 'src/app/services/commande/commande.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  listcommandes!:Listcomande;
  listCom!:Listcomande[];
  searchText:any=this.formateDateToday()

  // dame!:string;
  constructor(private listcommande:CommandeService) { }

  ngOnInit(): void {
    this.listcommande.getLigncommande().subscribe(data=>{
      this.listCom=data;
        console.warn(data)
        this.listCom.forEach(commande=>{
        console.log(commande['dateCommande']);
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
