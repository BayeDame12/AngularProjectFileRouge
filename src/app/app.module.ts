import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GestionaireComponent } from './gestionaire/gestionaire.component';
import { ClientComponent } from './client/client.component';
import { QuartierComponent } from './quartier/quartier.component';
// import { CommandeComponent } from './commande/commande.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { RouterModule, Routes } from '@angular/router';
import { CatagolueComponent } from './catagolue/catagolue.component';
import { HttpClientModule }from '@angular/common/http';
import { DetailBurgerComponent } from './catagolue/produit/detail-burger/detail-burger.component';
import { DetailMenuComponent } from './catagolue/produit/detail-menu/detail-menu.component';
import { ProduitComponent } from './catagolue/produit/produit.component';
import { PanierComponent } from './catagolue/produit/panier/panier.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LigneDeCommandeComponent } from './commande/ligne-de-commande/ligne-de-commande.component';
import { DetailCommandeComponent } from './commande/detail-commande/detail-commande.component';
import { ListerAdminComponent } from './commande/lister-admin/lister-admin.component';
import { DetailAdminCommComponent } from './commande/lister-admin/detail/detail-admin-comm/detail-admin-comm.component';
import { AdminModule } from './admin/admin.module';
import { DetailCommandeClientsComponent } from './commande/ligne-de-commande/detail-commande-clients/detail-commande-clients.component';
import {ZoneComponent} from "./admin/comandes/zone/zone.component";



const routes:Routes = [

  {
    path:'admin',loadChildren:()=>import ('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'detail-menu/:id',component:DetailMenuComponent
  },
  {
    path:'detail-burger/:id',component:DetailBurgerComponent
  },
  {
    path:'panier',component:PanierComponent
  },

  {
    path:'client',component:ClientComponent
  },
  {
    path:'produit',component:ProduitComponent
  },
  {
    path:'gestionaire',component:GestionaireComponent
  },
  {
    path:'quartier',component:QuartierComponent
  },

  {
    path:'detail-commande',component:DetailCommandeComponent
  },
  {
    path:'ligne-commande/:id',component:LigneDeCommandeComponent
  },
  {
    path:'detail-client-commande/:id',component:DetailCommandeClientsComponent
  },
  {
    path:'list-admin',component:ListerAdminComponent
  },
  {
    path:'detail-admin-com',component:DetailAdminCommComponent
  },
  {
    path:'produit',component:ProduitComponent
  },

  {
    path:'',component:CatagolueComponent
  },
  {
    path:'404',component: NotFoundComponentComponent,

  },

  {
    path:'**',redirectTo: '404'

  }
]
@NgModule({
  declarations: [
    AppComponent,
    GestionaireComponent,
    ClientComponent,
    QuartierComponent,
    ProduitComponent,
    NotFoundComponentComponent,
    CatagolueComponent,
    DetailBurgerComponent,
    DetailMenuComponent,
    PanierComponent,
    HeaderComponent,
    FooterComponent,
    LigneDeCommandeComponent,
    DetailCommandeComponent,
    ListerAdminComponent,
    DetailAdminCommComponent,
    DetailCommandeClientsComponent,


    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AdminModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
