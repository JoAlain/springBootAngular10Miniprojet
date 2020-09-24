import { ProduitDetailsComponent } from '../produit-details/produit-details.component';
import { Observable } from "rxjs";
import { ProduitService } from "../produit.service";
import { Produit } from "../produit";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits: Observable<Produit[]>;
  myForm: FormGroup;
  submitted = false;

  constructor(private produitService: ProduitService,
    private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({nom: [localStorage.getItem("nom")], code: [localStorage.getItem("code")] });
    this.reloadData();
  }

  reloadData() {
    let data = new FormData();
    data.append('nom', this.myForm.value.nom);
    data.append('code', this.myForm.value.code);
    this.produits = this.produitService.getProduitList(data);
  }

  deleteProduit(id: number) {
    this.produitService.deleteProduit(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  onSubmit() {
    this.reloadData();    
  }

  produitDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
