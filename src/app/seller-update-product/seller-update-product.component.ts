
import { product } from './../data-type';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  constructor(private router : ActivatedRoute, private product : ProductService, private http:HttpClient, private Router: Router){}
  producatData : undefined | product;
 ngOnInit() : void{
  let productId = this.router.snapshot.paramMap.get('id')
  productId && this.product.getProduct(productId).subscribe((data)=>{
    this.producatData = data
  })

 }
 editProduct(data:any){
  if(this.producatData){
    data.id = this.producatData.id
  }
  this.product.updateProduct(data).subscribe((result)=>{
    setTimeout(()=>(

      this.Router.navigate(['/seller-home'])
      ), 1000);

  })

}
}
