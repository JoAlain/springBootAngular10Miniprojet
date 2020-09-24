import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { ProduitService } from './produit.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateProduitComponent,
    ProduitDetailsComponent,
    ProduitListComponent,
    UpdateProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
