import { Component, OnInit } from '@angular/core';
import {CommandeService} from "../services/commande/commande.service";
import {Iclient} from "../model/Iclients/iclient";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
clients!:any[]

  constructor(private clientt: CommandeService) { }

  ngOnInit(): void {
  this.clientt.LignClient().subscribe(data=>{
    this.clients=data
    console.log(this.clients)
  })
  }

}
