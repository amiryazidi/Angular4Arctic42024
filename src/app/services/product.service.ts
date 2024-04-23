import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProduct : Product[] = [

    {id: 1, title: 'Product 1', price: 100, quantitee: 0, like: 0, image:"../../assets/images/1.png"},
    {id: 2, title: 'Product 2', price: 200, quantitee: 20, like: 0, image:"../../assets/images/1.png"},
    {id: 3, title: 'Product 3', price: 300, quantitee: 50, like: 5, image:"../../assets/images/1.png"},

  ]
  constructor() { }

  addProduct(p:Product){
    this.listProduct.push(p);
  }
}
