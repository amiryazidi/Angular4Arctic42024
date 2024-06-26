import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
  getProductById(id:number){
    return this.http.get<Product>('http://localhost:3000/products/'+id)
  }
  AddProduct(product:Product){
    return this.http.post('http://localhost:3000/products',product)
  }
  DeleteProduct(id:number){
    return this.http.delete('http://localhost:3000/products/'+id)
  }
  updateProduct(product:Product,id:number){
    return this.http.put('http://localhost:3000/products/'+id,product)
  }
}
