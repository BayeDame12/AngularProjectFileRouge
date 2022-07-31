import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boissons } from 'src/app/model/boissons';
import { Frites } from 'src/app/model/frites';
import { Menu } from 'src/app/model/menu';
import { BoissonsService } from 'src/app/services/boissons.service';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { FritesService } from 'src/app/services/frites.service';
import { PanierService } from '../../../services/panier.service';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

//pour afficher details burger & menu sur catalogue
menuid!:Menu;
boissons!:Boissons[];
boissons1!:Boissons[];
frites!:Frites[];


constructor(private detail:CatalogueService,private acRoute:ActivatedRoute,private addpan:PanierService,private boisontab:BoissonsService,private fritetab:FritesService) {

}
ngOnInit(): void {
  const idetail:number =this.acRoute.snapshot.params['id'];


  this.detail.detailgetMenu(idetail).subscribe(
  data=>{
      this.menuid=data;
      console.log(data);
    }
    );

    // this.fritetab.getFrites().subscribe(
    //   data=>{
    //     this.frites=data;
    //     console.log(data);
    //   }
    //   );

}

addToCart(product:any) {
  this.addpan.addToCart(product);
}


}
