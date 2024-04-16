import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { signUp, signin } from '../data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalidUserAuth = new EventEmitter<boolean>(false)

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

      if(result && result.body.length ){
        this.invalidUserAuth.emit(false)
        localStorage.setItem("user", JSON.stringify(result.body[0]))
        this.router.navigate(["/"])
      }else{
        this.invalidUserAuth.emit(true)
      }
    })
  }
  userAuthReload(){
    if(localStorage.getItem("user")){
      this.router.navigate(['/'])
    }
  }
}
