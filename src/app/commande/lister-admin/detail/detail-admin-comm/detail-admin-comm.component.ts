import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listcomande } from 'src/app/model/Icommande/listcomande';
import { CommandeService } from 'src/app/services/commande/commande.service';

@Component({
  selector: 'app-detail-admin-comm',
  templateUrl: './detail-admin-comm.component.html',
  styleUrls: ['./detail-admin-comm.component.css']
})
export class DetailAdminCommComponent implements OnInit {
dtailCom!:Listcomande;
  constructor(private detailcommande:CommandeService,private acRoute:ActivatedRoute) { }

  ngOnInit(): void {

   const idetail:number =this.acRoute.snapshot.params['id'];
    console.log(idetail)
    this.detailcommande.detailgetCommande(idetail).subscribe(data=>{
      this.dtailCom=data;
      console.log(this.dtailCom);

    })


  }

}
