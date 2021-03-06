import { Component, Input } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
    selector:'passenger-form',
    templateUrl:'passenger-form.component.html',
    styleUrls:['passenger-form.component.scss']
})
export class PassengerFormComponent{
    @Input()
    detail: Passenger;
    baggage: Baggage[] = [
        {
            key:'none',
            value: 'No baggage'
        },
        {
            key:'hand-only',
            value: 'Hand baggage'
        },
        {
            key:'hold-only',
            value: 'Hold baggage'
        },
        {
            key:'hand-hold',
            value: 'Hand and Hold baggage'
        }
    ];

    toggleCheckin(checkedIn: boolean){
        if(checkedIn){
            this.detail.checkedInDate = Date.now();
        }
    }
}