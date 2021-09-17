import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    templateUrl: 'passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit{
    passengers: Passenger[];
    constructor(){
        console.log('constructor');
    }
    ngOnInit(){
        console.log('ngOnInit');
        this.passengers = [
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
}