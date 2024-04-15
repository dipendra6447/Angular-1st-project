import { product } from './../data-type';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:string = 'default';
  sellerName:string ='';
  userName:string='';
  searchResult:undefined|product[];
  constructor(private route:Router, private product:ProductService){

  }
  ngOnInit(){
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller'
              let sellerStore = localStorage.getItem('seller')
              let sellerData = sellerStore && JSON.parse(sellerStore)
              this.sellerName = sellerData.name
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user')
          let userData = userStore && JSON.parse(userStore)
          this.userName = userData.name;
          this.menuType = 'user'
        }
        else{
          this.menuType = 'default'
        }
      }
    })
  }
  logOut(){
    localStorage.removeItem("seller")
    this.route.navigate(['/'])
  }
  userLogout(){
    localStorage.removeItem("user")
    this.route.navigate(['user-auth'])
  }
  searchProduct(query : KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result)=>{
        this.searchResult = result;
      })
    }
  }
  redirectDetails(id:string){
    this.route.navigate(['details/'+id])
  }
  hideSearcResult(){
    this.searchResult = undefined;
  }
  submitSearch(val:string){
    this.route.navigate([`search/${val}`])
  }

}
