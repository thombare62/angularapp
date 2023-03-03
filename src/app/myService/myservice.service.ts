import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  products: {};
  constructor(private httpClient: HttpClient) { }


  getUsers() {
   return this.httpClient.get(this.apiUrl);
  }
}
