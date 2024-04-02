import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  color!:string
listUser: User[] = [
  {id: 1, name: 'John Doe',email:'amir.yazidi@esprt.tn'},
  {id: 2, name: 'Jane Doe',email:' amir.yazidi@esprt.tn  '},
  {id: 3, name: 'Jane Doe',email:'  amir.yazidi@esprt.tn '}
]

affich(){
  alert('hello event')
}
}
