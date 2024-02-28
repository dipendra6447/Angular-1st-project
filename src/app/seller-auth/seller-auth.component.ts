import { Component } from '@angular/core';
import { SellerServiceService } from '../service/seller-service.service';

import { signUp, signin } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller:SellerServiceService) {

  }
  showLogin=true;
  showError ="";
  ngOnInit(){
    this.seller.reloadSeller()
  }
  signUp(data:signUp):void{

    this.seller.userSignup(data)
  }
  login(data:signUp):void{
    this.seller.userSignin(data)
    this.showError ="";
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
          this.showError="Email or Password is not correct";
      }
    })
  }
  openLogin(){
    this.showLogin=true;
  }
  openSigin(){
    this.showLogin=false;
  }
}
