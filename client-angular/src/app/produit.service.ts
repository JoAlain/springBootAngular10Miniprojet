import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = 'http://localhost:5000/springangular/api/produits';
  private urlCreate = 'http://localhost:5000/springangular/api/add';

  constructor(private http: HttpClient) { }

  getProduit(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduit(produit: Object): Observable<Object> {
    return this.http.post(`${this.urlCreate}`, produit);
  }

  updateProduit(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduit(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProduitList(data: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}`,data);
  }

}
