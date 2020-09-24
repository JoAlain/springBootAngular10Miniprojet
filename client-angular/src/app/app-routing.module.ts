import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
const routes: Routes = [
  { path: '', redirectTo: 'produit', pathMatch: 'full' },
  { path: 'produits', component: ProduitListComponent },
  { path: 'add', component: CreateProduitComponent },
  { path: 'update/:id', component: UpdateProduitComponent },
  { path: 'details/:id', component: ProduitDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
