import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMsg: string | undefined;
  constructor(private product:ProductService) { }
  addNewProduct(data:product){
    this.product.addProduct(data).subscribe((result)=>{
      if(result){
        this.addProductMsg = "Product added successfully"
      }
      setTimeout(()=>(this.addProductMsg = undefined), 3000);
    })
  }
}
