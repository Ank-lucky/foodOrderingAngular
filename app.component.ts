import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  category:String;
  menuItems:any;
  chosen:boolean;
  flag:boolean;
  constructor(private httpClient:HttpClient){
    this.chosen=false;
    this.httpClient.get('https://thesmartq.firebaseio.com/menu.json')
    .subscribe(
      (data) => {
       this.menuItems=data;
      });
      this.getVegType();
  }
  getVegType()
  {
     setTimeout(() => {
      console.log("here");
     for(let items of this.menuItems)
    {
      console.log(items.vegflag);
      items.vegflag === 'veg'? this.flag=false:this.flag=true;
    }
  } ,1000);
}
  selectMenu(menu:any){
    this.category=menu;
    console.log("here",this.category);
         for(let i of this.menuItems){
            if(i.category == this.category){
              console.log(i.category);
              this.chosen=true;
            }   
         }
       
  }


}