import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from './user.model';


// @ts-ignore
// @ts-ignore
// @ts-ignore
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'})
};

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private userUrl = 'http://localhost:5000';  // URL to REST API

  constructor(private http: HttpClient) { }



  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:ban-types typedef
  async getUser(testID: string){
    let data;
    const url = `${this.userUrl}/users/` + testID;
    await this.http.get(url).toPromise().then( response => {
      console.log(response);
      data = response;
    });
    // @ts-ignore
    return data;
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:ban-types typedef
  addUser(user: User) {
    const url = `${this.userUrl}/add`;
    return this.http.post(url, user, httpOptions);
  }


}
