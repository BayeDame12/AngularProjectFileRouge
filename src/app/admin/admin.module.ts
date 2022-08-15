import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ComandesComponent } from './comandes/comandes.component';
import { ProduitsComponent } from './produits/produits.component';
import { Routes, RouterModule } from '@angular/router';
import { ZoneComponent } from './comandes/zone/zone.component';
import { NewComponent } from './produits/new/new.component';
import { LivreurComponent } from './livraisons/livreur/livreur.component';
import { IdComandeComponent } from './comandes/id-comande/id-comande.component';
import { IdLivraisonComponent } from './livraisons/id-livraison/id-livraison.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {LivraisonsComponent} from "./livraisons/livraisons.component";
import { AjouterBurgerComponent } from './produits/ajouter-burger/ajouter-burger.component';
import { AjouterMenuComponent } from './produits/ajouter-menu/ajouter-menu.component';


export const routes:Routes=[
    // { path: '' ,component:ComandesComponent},
    { path:'commandes',

       children:[
         { path: 'zone/:id' ,component:ZoneComponent},
         { path: ':id-comande',component:IdComandeComponent},
         { path: '' ,component:ComandesComponent}
                ]

      },
      { path:'livraisons',
          children:[
            { path: 'livreur' ,component:LivreurComponent},
            { path: ':id-livreur',component:IdLivraisonComponent},
            { path: '' ,component: LivraisonsComponent},

              ]
      },
      { path:'produits',
          children:
              [
                { path: '' ,component:ProduitsComponent},
                { path: 'ajouter-menu' ,component:AjouterMenuComponent},
                { path: 'ajouter-burger' ,component:AjouterBurgerComponent}
              ]
      },
]


@NgModule({
  declarations: [
    AdminComponent,
    LivraisonsComponent,
    ProduitsComponent,
    ComandesComponent,
    ZoneComponent,
    LivreurComponent,
    NewComponent,
    IdComandeComponent,
    IdLivraisonComponent,
    AjouterBurgerComponent,
    AjouterMenuComponent,


  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        RouterModule.forChild(routes),
        FormsModule,
        Ng2SearchPipeModule,

    ]
})
export class AdminModule { }
