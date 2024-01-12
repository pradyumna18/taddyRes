import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit{
  public products:any=[];
  public grandTotal!:number;


   constructor(private food:FoodService){}

   ngOnInit(): void {
    this.food.getFoodData().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.food.getTotal();
    });
}











  // products:any=[];
  // allProducts:any=0;
  // constructor(private food:FoodService){

  // }
  // ngOnInit(): void {
  //   this.food.getFoodData().subscribe(res=>{
  //     this.products=res;
  //     this.allProducts=this.food.getTotal();
  //   })
  // }

  
}
