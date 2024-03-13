import { product } from './../data-type';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  constructor(private router : ActivatedRoute, private product : ProductService){}
  producatData : undefined | product;
 ngOnInit() : void{
  let productId = this.router.snapshot.paramMap.get('id')
  productId && this.product.getProduct(productId).subscribe((data)=>{
    this.producatData = data
  })

 }
  editProduct(data:any){}
}
