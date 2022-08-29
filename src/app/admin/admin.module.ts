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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {LivraisonsComponent} from "./livraisons/livraisons.component";
import { NavComponent } from './comandes/nav/nav.component';


export const routes:Routes=[
    { path: 'admin' ,component:ComandesComponent},
    { path:'commandes',

       children:[
         { path: 'zone/:id' ,component:ZoneComponent},
         { path: 'id-comande/:id',component:IdComandeComponent},
         { path: '' ,component:ComandesComponent}
                ]

      },
      { path:'livraisons',
          children:[
            { path: 'livreur/:id' ,component:LivreurComponent},
            { path: ':id-livreur',component:IdLivraisonComponent},
            { path: '' ,component: LivraisonsComponent},

              ]
      },
      { path:'produits',
          children:
              [
                { path: '' ,component:ProduitsComponent},
                { path: 'new' ,component:NewComponent}

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
        NavComponent,


    ],
    exports: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        RouterModule.forChild(routes),
        FormsModule,
        Ng2SearchPipeModule,
        ReactiveFormsModule,

    ]
})
export class AdminModule { }
