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
  async goToAdmin(){
    // tslint:disable-next-line:no-unused-expression
    const psswd = (document.getElementById('adminPassword') as HTMLInputElement).value;
    this.authService.login(psswd);
  }

  // tslint:disable-next-line:typedef
  setAdmin(){
    this.admin = !this.admin;
  }
}
