import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { ProduitListComponent } from '../produit-list/produit-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {

  id: number;
  produit: Produit;

  constructor(private route: ActivatedRoute,private router: Router,
    private produitService: ProduitService) { }

  ngOnInit() {
    this.produit = new Produit();

    this.id = this.route.snapshot.params['id'];
    
    this.produitService.getProduit(this.id)
      .subscribe(data => {
        console.log(data)
        this.produit = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['produits']);
  }

}
