import { ProductService } from '../service/product.service';
import { product } from './../data-type';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productList : undefined | product[];
  constructor(private product:ProductService) { }
  ngOnInit(): void{
    this.product.productList().subscribe((result)=>{
      this.productList = result
    })
  }
  deleteItem(id:string){
    console.log(id)
  }
}
