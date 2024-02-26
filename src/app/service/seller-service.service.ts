import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient,  private router:Router) {

   }
   userSignup(data:signUp){
    return this.http.post('http://localhost:3000/seller', data, {observe:'response'})
    .subscribe((result)=>{
      this.isSellerLoggedIn.next(true)
      localStorage.setItem("seller", JSON.stringify(result.body))
      this.router.navigate(["/seller-home"])
    })
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(["/seller-home"])
    }
  }
}
