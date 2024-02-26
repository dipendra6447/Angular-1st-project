import { Component } from '@angular/core';
import { SellerServiceService } from '../service/seller-service.service';

import { signUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller:SellerServiceService) {

  }
  ngOnInit(){
    this.seller.reloadSeller()
  }
  signUp(data:signUp){

    this.seller.userSignup(data)
  }
}
