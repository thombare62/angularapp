import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
userName= new Subject<any>(); //This is a subject and it is one kind of Observable.
// userName= new BehaviorSubject <any> (`Chandrashekhar`); in Behavious Subject we can set default value.
mobileNo= new Subject<any>();
  constructor() { }
}
