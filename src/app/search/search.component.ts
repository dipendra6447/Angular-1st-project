import { product } from './../data-type';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResult: undefined|product[];
  producatType:string = '';
  constructor(private activeRoute:ActivatedRoute, private product:ProductService){}
  ngOnInit() : void{
    let quary = this.activeRoute.snapshot.paramMap.get('category');
      this.producatType = quary || '';
      quary && this.product.searchProduct(quary).subscribe((result)=>{
      this.searchResult= result;
      if(result.length===0){
        this.searchResult = undefined;
      }
    })

  }
}
