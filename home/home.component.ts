import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  openReg(){
    const model=document.getElementById('reg');
    if(model!=null){
    model.style.display='block'
    }
    }
    closeReg(){
    const model=document.getElementById('reg');
    if(model!=null){
    model.style.display='none'
    }
    }
   
}
