import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private ps:ProductService) { }

  RegisterForm = new FormGroup({
    id : new FormControl('',Validators.required),
    title : new FormControl('',[Validators.required,Validators.minLength(6)]),
    price : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    like : new FormControl('',Validators.required),
  })
  save(){
    this.ps.addProduct(this.RegisterForm.value as any)
  }
}
