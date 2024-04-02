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

    {id: 1, title: 'Product 1', price: 100, quantitee: 10, like: 0},
    {id: 2, title: 'Product 2', price: 200, quantitee: 20, like: 0},
  ]

  incrementlike(i: number){
    this.listProduct[i].like++;

  }
  decrementqte(i: number){
    this.listProduct[i].quantitee--;

  }
}
