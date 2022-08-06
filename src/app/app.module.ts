import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GestionaireComponent } from './gestionaire/gestionaire.component';
import { ClientComponent } from './client/client.component';
import { LivreurComponent } from './livreur/livreur.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { ZoneComponent } from './zone/zone.component';
import { QuartierComponent } from './quartier/quartier.component';
import { CommandeComponent } from './commande/commande.component';
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

const routes:Routes = [
  {
    path:'',component:CatagolueComponent
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
    path:'livreur',component:LivreurComponent
  },
  {
    path:'livraison',component:LivraisonComponent
  },
  {
    path:'zone',component:ZoneComponent
  },
  {
    path:'quartier',component:QuartierComponent
  },
  {
    path:'commande',component:CommandeComponent
  },
  {
    path:'produit',component:ProduitComponent
  },
  {
    path:'404',component: NotFoundComponentComponent,

  }
  ,
  {
    path:'**',redirectTo: '404'

  }
]
@NgModule({
  declarations: [
    AppComponent,
    GestionaireComponent,
    ClientComponent,
    LivreurComponent,
    LivraisonComponent,
    ZoneComponent,
    QuartierComponent,
    CommandeComponent,
    ProduitComponent,
    NotFoundComponentComponent,
    CatagolueComponent,
    DetailBurgerComponent,
    DetailMenuComponent,
    PanierComponent,
    HeaderComponent,
    FooterComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
