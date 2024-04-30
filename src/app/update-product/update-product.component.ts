import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerProService } from '../services/consumer-pro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {


  constructor(private consP:ConsumerProService,private rt:Router,private act :ActivatedRoute) { }
  id!:number
  product!:Product
  RegisterForm = new FormGroup({
    id : new FormControl('',Validators.required),
    title : new FormControl('',[Validators.required,Validators.minLength(6)]),
    price : new FormControl('',Validators.required),
    quantitee : new FormControl('',Validators.required),
    like : new FormControl('',Validators.required),
  })


  ngOnInit(){
    //3- recuperation de l'id
    this.id=this.act.snapshot.params['id'];
    //4- recuperation du produit par id
    this.consP.getProductById(this.id).subscribe(
      (data)=>{
        this.product=data,
        //5- remplir le formulaire par les données du produit
        this.RegisterForm.patchValue(this.product as any)
      }
    )
  }
  save(){

    //mise à jour
    this.consP.updateProduct(this.RegisterForm.value as any,this.id).subscribe(
      ()=>this.rt.navigate(['product'])
    )
  }
}


