import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProService } from '../services/consumer-pro.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  pricee!: number;
  alert!:number
  constructor(private ps:ProductService,private stat:CalculService,private cons:ConsumerProService) { }

  listProduct!: Product[];

  ngOnInit(){
   // this.listProduct = this.ps.listProduct;
    this.cons.getProducts().subscribe(
      { next: (data) => this.listProduct=data,
        error: (err) => console.log(err),
        complete: () => console.log('done')
      });

    this.alert=this.stat.stat(this.listProduct,'quantitee',0)

  }
  incrementlike(i: number){
    this.listProduct[i].like++;

  }
  decrementqte(i: number){
    this.listProduct[i].quantitee--;

  }
}
