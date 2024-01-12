import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
   foodData:any=[];
   productList = new BehaviorSubject<any>([]);
   constructor(private http:HttpClient) { }

   getFoodData(){
       return this.productList.asObservable();
    }

   setFood(product:any){
     this.foodData.push(...product);
     this.productList.next(product);
   }

   addToBill(product:any){
     this.foodData.push(product);
     this.productList.next(this.foodData);
     this.getTotal();
     console.log(this.foodData);
     
   }

  getTotal():number{
    let grandTotal=0;
    this.foodData.map((p:any)=>{
      grandTotal +=p.amount;
    }); 
    return grandTotal;
  }
}
