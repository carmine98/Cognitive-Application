import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuthenticate!: boolean;
  private userUrl = 'http://localhost:5000';  // URL to REST API

  constructor(private http: HttpClient, private router: Router) {
  }


  // tslint:disable-next-line:typedef
  login(password: string){
    // @ts-ignore
    const url = `${this.userUrl}/password/` + password;
    this.http.get(url).subscribe((data) => {

      },
      (error) => {
        if (error.status === 200) {
          this.isAuthenticate = true;
          this.router.navigateByUrl('/admin');
        } else {
          this.isAuthenticate = false;
          (document.getElementById('adminPassword') as HTMLInputElement).value = '';
          alert('wrong password');
        }
      });
  }
}
