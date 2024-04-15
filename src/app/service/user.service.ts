import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUp, signin } from '../data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,  private router:Router) { }

  userSignup(user: signUp){
   return this.http.post('http://localhost:3000/user', user,{observe:'response'})
   .subscribe((result)=>{
      localStorage.setItem('user', JSON.stringify(result.body))
      this.router.navigate(["/"])

   })

  }
  userSignin(user:signin){
    return this.http.get(`http://localhost:3000/user?email=${user.email}&password=${user.password}`, {observe:'response'})
    .subscribe((result:any)=>{

      if(result && result.body ){
        localStorage.setItem("user", JSON.stringify(result.body[0]))
        this.router.navigate(["/"])
        console.log(result.body)

      }
    })
  }
  userAuthReload(){
    if(localStorage.getItem("user")){
      this.router.navigate(['/'])
    }
  }
}
