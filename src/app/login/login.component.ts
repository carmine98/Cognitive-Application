import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { UsersService } from '../user/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message!: string;

  constructor(private db: AngularFirestore, public service: UsersService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  // tslint:disable-next-line:typedef
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: '',
      surname: '',
      name: '',
      age: null,
      genre: '',
      testID: ''
    };
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    this.message = '';
    const userData = Object.assign({}, form.value);
    delete userData.id;
    this.db.collection('utenti').add(userData);
    this.message = 'information is successfully saved!';
    this.resetForm(form);
  }

}
