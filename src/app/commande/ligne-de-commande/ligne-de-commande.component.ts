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
detailclient!:any;
listCom!:Listcomande[];
  tab!:any[];
  searchText!:any

  constructor(private listcommande:CommandeService,private acRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.searchText=this.formateDateToday();

    const detail:number =this.acRoute.snapshot.params['id'];
    this.listcommande.getClient(detail).subscribe(data=>{
      this.detailclient=data;
      console.log(this.detailclient)
      console.warn(this.detailclient['commandes'])
      this.tab=this.detailclient['commandes']

    })


this.listcommande.getLigncommande().subscribe(data=>{
  this.listCom=data;
    this.listCom.forEach(commande=>{
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

 change(item:any){
   if (item.etatCommande =='en cours'){
     this.listcommande.Ajour(item.id,{'etatCommande':'commande annuler'})
   }

   setTimeout(function(){
     window.location.reload();
   }, 1000);
  }

}


