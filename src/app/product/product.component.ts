import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  pricee!: number;
  listProduct : Product[] = [

    {id: 1, title: 'Product 1', price: 100, quantitee: 10, like: 0, image:"../../assets/images/1.png"},
    {id: 2, title: 'Product 2', price: 200, quantitee: 20, like: 0, image:"../../assets/images/1.png"},
    {id: 3, title: 'Product 3', price: 300, quantitee: 50, like: 5, image:"../../assets/images/1.png"},

  ]

  incrementlike(i: number){
    this.listProduct[i].like++;

  }
  decrementqte(i: number){
    this.listProduct[i].quantitee--;

  }
}
