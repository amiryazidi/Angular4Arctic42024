import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ConsumerProService } from '../services/consumer-pro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private ps:ProductService,private consP:ConsumerProService,private rt:Router) { }

  RegisterForm = new FormGroup({
    id : new FormControl('',Validators.required),
    title : new FormControl('',[Validators.required,Validators.minLength(6)]),
    price : new FormControl('',Validators.required),
    quantitee : new FormControl('',Validators.required),
    like : new FormControl('',Validators.required),
  })
  save(){
   // this.ps.addProduct(this.RegisterForm.value as any)
   this.consP.AddProduct(this.RegisterForm.value as any).subscribe(
      ()=>{
        this.rt.navigateByUrl('/product')
        console.log(this.RegisterForm.value)
      }
   )
  }
}
