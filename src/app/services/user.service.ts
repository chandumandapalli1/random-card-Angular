import { Injectable } from '@angular/core';


//httpclient for making http request ..
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

//making the varible as private so that it is not accesible outside and protocol is 
//it accepts https as well as http but recommended https
  private url="https://randomuser.me/api";
  //adding httpclient into private parameter of constructor...

  constructor(private http:HttpClient) { }

getUser()
{
  //this getUser () acts as observable and angular subscribes to it and 
  //unsubscribes automatically .....
  return this.http.get(this.url);

}


}
