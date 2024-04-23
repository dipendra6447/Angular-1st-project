import { product } from './../data-type';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData = new EventEmitter<product[] | []>();
  constructor(private http:HttpClient, private router:Router) { }
  addProduct(data:product){
    return this.http.post('http://localhost:3000/product', data, {observe : 'response'})

  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/product')
  }
  deleteProduct(id:string){
    return this.http.delete(`http://localhost:3000/product/${id}`)
  }
  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/product/${id}`)
  }
  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/product/${product.id}`, product, {observe : 'response'})
  }
  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=3')
  }
  trandingProducts(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=6')
  }
  searchProduct(event:string){
    return this.http.get<product[]>(`http://localhost:3000/product?category=${event}`)
  }
  productToCart(data:product){
    let cartData = [];

    let localCart = localStorage.getItem('localCart')
    if(!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]))
    }
    else{
      cartData=JSON.parse(localCart)
      cartData.push(data)
      localStorage.setItem('localCart', JSON.stringify(cartData))
    }
    this.cartData.emit(cartData)
  }
}
