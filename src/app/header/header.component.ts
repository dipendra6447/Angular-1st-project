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
  searchResult:undefined|product[];
  constructor(private route:Router, private product:ProductService){

  }
  ngOnInit(){
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller'
              let sellerStore = localStorage.getItem('seller')
              let sellerData = sellerStore && JSON.parse(sellerStore)[0]
              this.sellerName = sellerData.name
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
  searchProduct(query : KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result)=>{
        this.searchResult = result;
      })
    }
  }
  hideSearcResult(){
    this.searchResult = undefined;
  }
  submitSearch(val:string){
    this.route.navigate([`search/${val}`])
  }
}
