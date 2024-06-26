import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { signUp, signin } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)
  constructor(private http:HttpClient,  private router:Router) {

   }
   authError='';
   userSignup(data:signUp){
    return this.http.post('http://localhost:3000/seller', data, {observe:'response'})
    .subscribe((result)=>{
      this.isSellerLoggedIn.next(true)
      localStorage.setItem("seller", JSON.stringify(result.body))
      this.router.navigate(["/seller-home"])
    })
  }
  userSignin(data:signin){
    return this.http.get(`http://localhost:3000/seller?name=${data.name}&password=${data.password}`, {observe:'response'})
      .subscribe((result:any)=>{
        if(result && result.body && result.body.length){
          localStorage.setItem("seller", JSON.stringify(result.body[0]))
          this.router.navigate(["/seller-home"])

        }else{
          this.isLoginError.emit(true)

        }
      })
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(["/seller-home"])
    }
  }
}
