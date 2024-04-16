import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  login = new FormControl('',Validators.required);
  pwd=new FormControl('',Validators.required);



  RegisterForm = new FormGroup({
    nom : new FormControl('',[Validators.required,Validators.minLength(6)]),
    prenom : new FormControl('',[Validators.required,Validators.minLength(7)]),
    adress : new FormControl('',[Validators.required,Validators.email]),
    tel : new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
  })
  save(){
    console.log(this.login)
  }
}
