import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  public productList:any;
  constructor(private api:ApiService,private food:FoodService){}




  ngOnInit(): void {
    this.api.getProducts().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any)=>{
           Object.assign(a,{quantity:1,amount:a.price})
      })
    })
  }
     addToBill(item:any){
      this.food.addToBill(item);
   }






//   productList:any;
// item: any;

//   constructor(private food:FoodService){}
//   ngOnInit(): void {
//     this.productList.forEach((a:any) => {
//       Object.assign(a,{quantity:1,total:a.price})
//     });
//   }

//   addToBill(item:any){
//      this.food.addToBill(item);
//   }
}
