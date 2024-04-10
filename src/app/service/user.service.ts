import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUp } from '../data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,  private router:Router) { }

  userSignup(user: signUp){
   return this.http.post('http://localhost:3000/user', user,{observe:'response'})
   .subscribe((result)=>{
    if(result){
      localStorage.setItem('user', JSON.stringify(result.body))
      this.router.navigate(["/"])
    }
   })

  }
  userAuthReload(){
    if(localStorage.getItem("user")){
      this.router.navigate(['/'])
    }
  }
}
