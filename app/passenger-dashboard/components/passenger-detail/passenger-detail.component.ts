import { Component, OnChanges,  Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-detail',
    templateUrl:'passenger-detail.component.html',
    styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnChanges{
    @Input()
    detail: Passenger;
    
    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter();
    
    editing: boolean = false;
    
    constructor(){}

    ngOnChanges(changes){
        console.log("current values is ", changes.detail.currentValue)
        if(changes.details){
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }
    
    onNameChange(value: string){
        this.detail.fullname = value;
    }
    
    toggleEdit(){
        if(this.editing){
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove(){
        this.remove.emit(this.detail);
    }
}