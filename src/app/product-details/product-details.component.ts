import { product } from './../data-type';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  producatDetails:undefined|product;
  productQuantity : number =1;
  constructor(private activeRouter:ActivatedRoute, private product:ProductService){}
  ngOnInit(){
    let productId = this.activeRouter.snapshot.paramMap.get("productId")
    productId && this.product.getProduct(productId).subscribe((result)=>{
      this.producatDetails = result
    })
  }
  handelQuntity(val:String){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1
    }
  }
  addToCart(){
    if(this.producatDetails){
        this.producatDetails.quantity = this.productQuantity
        if(!localStorage.getItem('user')){
          this.product.productToCart(this.producatDetails)
        }

    }
  }
}
