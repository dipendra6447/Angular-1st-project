import { UserService } from '../service/user.service';
import { signUp, signin } from './../data-type';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showLogin:boolean = true
  constructor(private user:UserService){}
  ngOnInit():void{
    this.user.userAuthReload();
  }
  signUp(data: signUp){
    this.user.userSignup(data);
  }
  logIn(data: signin){
    console.log(data)
  }
  openSigin(){
    this.showLogin = true
  }
  openSignup(){
    this.showLogin = false
  }
}
