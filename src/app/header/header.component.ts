import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:string = 'default';
  constructor(private route:Router){

  }
  ngOnInit(){
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.log('you are seller')
          this.menuType = 'seller'
        }
        else{
          console.log('you are not seller')
          this.menuType = 'default'
        }
      }
    })
  }
}
