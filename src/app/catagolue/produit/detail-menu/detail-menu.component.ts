import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/model/menu';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

//pour afficher details burger & menu sur catalogue
menuid!:Menu;
constructor(private detail:CatalogueService,private acRoute:ActivatedRoute) {


}
ngOnInit(): void {

  const idetail:number =this.acRoute.snapshot.params['id'];
  this.detail.detailgetMenu(idetail).subscribe(
  data=>{
      this.menuid=data;
      console.log(data);
    }
    );
}
}
