import { ProductService } from '../service/product.service';
import { product } from './../data-type';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  popularProducts : undefined | product[];
  trandingProduct : undefined| product[];
  constructor(private product:ProductService){}
  ngOnInit(): void{
    this.product.popularProducts().subscribe((data)=>{
       this.popularProducts = data;
    })

    this.product.trandingProducts().subscribe((data)=>{
      this.trandingProduct = data;
    })
  }
}
