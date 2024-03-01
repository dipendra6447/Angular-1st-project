import { ProductService } from '../service/product.service';
import { product } from './../data-type';
import { Component } from '@angular/core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  faTrash = faTrash;
  productList : undefined | product[];
  showDeleteMsg: undefined | string;
  constructor(private product:ProductService) { }
  addList(){
    this.product.productList().subscribe((result)=>{
      this.productList = result
    })
  }
  ngOnInit(): void{
    this.addList()
  }
  deleteItem(id:string){
    console.log(id)
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.addList()
        this.showDeleteMsg = 'Product deleted successfully'
      }
    })
    setTimeout(() => {
      this.showDeleteMsg = undefined;
    }, 3000);
  }

}
