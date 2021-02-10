import { Component, OnInit} from '@angular/core';


import { NgForm } from '@angular/forms';
import { UsersService } from '../user/users.service';
import { User } from '../user/user.model';

import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message!: string;
  testIdentifier!: string;
  user!: User;


  constructor(public service: UsersService, private snackbar: MatSnackBar, private router: Router) {
    this.message = '';
  }

  ngOnInit(): void {
    this.resetForm();
  }

  // tslint:disable-next-line:typedef
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.user = {
      surname: '',
      name: '',
      age: null,
      genre: '',
      testID: ''
    };
  }

  // tslint:disable-next-line:typedef
  resetGenre(form?: NgForm){
    if (form != null) {
      form.resetForm();
    }
    this.user.genre = '';
  }

  // tslint:disable-next-line:typedef
  async onSubmit(form: NgForm) {
    this.message = '';
    let data;
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['background-red'];
    const user = new User(form.value.surname, form.value.name, form.value.age, form.value.genre, form.value.testID);
    // @ts-ignore
    if (user.age < 18){
      this.resetForm(form);
      this.message = 'You must be at least 18 years old to do the test';
      this.snackbar.open(this.message, undefined, config);
      return;
      // @ts-ignore
    } else if (user.age >= 100){
      this.resetForm(form);
      this.message = 'The age value is not possible';
      this.snackbar.open(this.message, undefined, config);
      return;
    }
    this.testIdentifier = form.value.testID;
    sessionStorage.setItem('testIdentifier', this.testIdentifier);
    data = await this.service.getUser(this.testIdentifier);
    if (data === null){
      this.message = 'Test ID is not valid';
      this.resetForm(form);
      this.snackbar.open(this.message, undefined, config);
    }else {
      this.service.addUser(user).subscribe(response => {
        console.log(response);
        this.message = 'Information is successfully saved!';
        this.resetForm(form);
        this.snackbar.open(this.message, undefined, config);
        this.router.navigateByUrl('/explain-btact');
      }, error => {
        console.log(error);
      });
    }
  }

}
