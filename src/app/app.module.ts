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
import { ProduitComponent } from './produit/produit.component';
import { MenuComponent } from './menu/menu.component';
import { FriteComponent } from './frite/frite.component';
import { BoissonComponent } from './boisson/boisson.component';
import { BurgerComponent } from './burger/burger.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { RouterModule, Routes } from '@angular/router';
import { CatagolueComponent } from './catagolue/catagolue.component';
import { HeaderComponent } from './catagolue/header/header.component';
import { FooterComponent } from './catagolue/footer/footer.component';
import { MainComponent } from './catagolue/main/main.component';
import { HttpClientModule }from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';

const routes:Routes = [
  {
    path:'',component:CatagolueComponent
  },
  {
    path:'client',component:ClientComponent
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
    path:'comment',component:CommentComponent
  },
  {
    path:'produit',component:ProduitComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'frite',component:FriteComponent
  },
  {
    path:'boisson',component:BoissonComponent
  },
  {
    path:'burger',component:BurgerComponent
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
    MenuComponent,
    FriteComponent,
    BoissonComponent,
    BurgerComponent,
    NotFoundComponentComponent,
    CatagolueComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
