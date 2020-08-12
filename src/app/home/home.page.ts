import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
 
  list: any = [];
  item;

  constructor() {}

  addTodo(){
  
    let obj = {shoppingItem: this.item }
    this.list.push(obj);
    console.log(this.list)
     }
  delete(i){
    console.log(i);
    this.list.splice(i, 1);
   
  }

}
