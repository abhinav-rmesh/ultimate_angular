import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http"; 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Passenger } from "./models/passenger.interface";


const PASSENGER_API = '/api/passengers';

@Injectable()
export class PassengerDashboardService{
    constructor(private http: Http ){
        console.log(this.http);
        
    }

    getPassenger(id: number): Observable<Passenger> {
        return this.http
            .get(PASSENGER_API+'/'+id)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => Observable.throw(error.json));
    }
    
    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any) => Observable.throw(error.json));
    }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
            .put(PASSENGER_API + '/' + passenger.id, passenger)
            .map((response: Response) => {
                console.log('the response of updatepassenger is: ' + response.toString())
                return response.json();
            })
            .catch((error: any) => Observable.throw(error.json));
    }

    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
            .delete(PASSENGER_API + '/' + passenger.id)
            .map((response: Response) => {
                console.log('the response of removepassenger is:' + response.json())
                return response.json();
            })
            .catch((error: any) => Observable.throw(error.json));
    }
}