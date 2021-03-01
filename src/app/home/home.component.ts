import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  admin!: boolean;

  selectedLanguage = 'eng';

  constructor(private router: Router, private authService: AuthService) {
    this.admin = false;
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToLogin(){
    sessionStorage.setItem('lang', this.selectedLanguage);
    this.router.navigateByUrl('/login');
  }

  // tslint:disable-next-line:typedef
  goToAdmin(){
    // tslint:disable-next-line:no-unused-expression
    const psswd = (document.getElementById('adminPassword') as HTMLInputElement).value;
    if (this.authService.login(psswd)){
      this.router.navigateByUrl('/admin');
    }else {
      (document.getElementById('adminPassword') as HTMLInputElement).value = '';
      alert('wrong password');
    }
  }

  // tslint:disable-next-line:typedef
  setAdmin(){
    this.admin = !this.admin;
  }
}
