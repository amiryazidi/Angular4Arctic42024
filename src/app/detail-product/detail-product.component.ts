import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ConsumerProService } from '../services/consumer-pro.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  id!:number
  product!:Product
  constructor(private Act : ActivatedRoute,private ps:ProductService,private consP:ConsumerProService) {}


  ngOnInit(){
    this.id = this.Act.snapshot.params['id'];
    //this.product=this.ps.listProduct.find(p=>p.id==this.id)!;
    this.consP.getProductById(this.id).subscribe(
      (data)=>this.product=data,
    )
  }

}
