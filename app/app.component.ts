import { Component } from '@angular/core';

interface Passenger{
  id: number;
  fullname: String;
  checkedin: boolean;
  checkedInDate?: number;
  children?: Child[]; 
}

interface Child{
  name: String;
  age: Number;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent{
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  name: String = "Abhinav";
  newName : string = "newName";
  constructor(){
    this.title = 'Ultimate Angular';
  }
  handleInput(event: any){
    this.name = event.target.value;
  }
  handleClick(event: any){
    this.name = "Ramesh";
  }
  handleChange(value: string){
    this.name = value;
  }
  handleNewClick(value: string){
    this.name = value;
  }

  //NgFor example

  passengers: Passenger[] = [
    {
    id: 1,
    fullname: 'AbhinavOne',
    checkedin: true,
    checkedInDate: 1490742000000,
    children: [{name:'AbhinavOneChild', age:2},
               {name:'AbhinavOneChildTwo', age:3}]
    }, 
    {
      id: 2,
      fullname: 'AbhinavTwo',
      checkedin: false,
    }, 
    {
      id: 3,
      fullname: 'AbhinavThree',
      checkedin: true,
      checkedInDate: 1490742000000,
      children: [{name:'AbhinavThreeChild', age:2}]
    }
  ]
}