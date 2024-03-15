import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../service/product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMsg: string | undefined;
  constructor(private product:ProductService, private http:HttpClient, private router: Router) { }
  addNewProduct(data:product){
    this.product.addProduct(data).subscribe((result:any)=>{
      if(result){
        this.addProductMsg = "Product added successfully"
      }
      setTimeout(()=>(
        this.addProductMsg = undefined,
        this.router.navigate(['/seller-home'])
        ), 3000);
    })
  }
}
