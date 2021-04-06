import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate = false;
  realPassword!: string;
  private userUrl = 'http://localhost:5000';  // URL to REST API

  constructor(private http: HttpClient) {
    this.getPassword();
  }

  login(password: string): boolean {
    // @ts-ignore
    if (password === this.realPassword) {
      this.isAuthenticate = true;
    } else {
      this.isAuthenticate = false;
    }
    return this.isAuthenticate;
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:ban-types typedef
  async getPassword(){
    let data;
    // tslint:disable-next-line:prefer-const
    let test;
    const url = `${this.userUrl}/password`;
    this.http.post(url, test).toPromise().then( response => {
      data = Object.assign({}, response);
      // @ts-ignore
      this.realPassword = data[0].password;
    });
  }

}
