import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listcomande } from 'src/app/model/Icommande/listcomande';
import { CommandeService } from 'src/app/services/commande/commande.service';

@Component({
  selector: 'app-ligne-de-commande',
  templateUrl: './ligne-de-commande.component.html',
  styleUrls: ['./ligne-de-commande.component.css']
})
export class LigneDeCommandeComponent implements OnInit {
detailcommandee!:Listcomande;
listCom!:Listcomande[];
  constructor(private listcommande:CommandeService,private acRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const detail:number =this.acRoute.snapshot.params['id'];


    this.listcommande.detailgetCommande(detail).subscribe(data=>{
      this.detailcommandee=data
        console.warn(data)


})


this.listcommande.getLigncommande().subscribe(data=>{
  this.listCom=data;
    console.warn(data)
    this.listCom.forEach(commande=>{
    console.log(commande);

    })

})

}
  }


