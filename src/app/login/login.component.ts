import { Component, OnInit} from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { UsersService } from '../user/users.service';

import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message!: string;
  firestore = firebase.firestore();
  startTest!: boolean;
  testIdentifier!: string;


  constructor(private db: AngularFirestore, public service: UsersService, private snackbar: MatSnackBar) {
    this.startTest = false;
  }

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
    sessionStorage.setItem('testIdentifier', userData.testID);
    this.testIdentifier = userData.testID;
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['background-red'];
    this.firestore.collection('utenti')
      .where('testID', '==', userData.testID)
      .get()
      .then((document) => {
        // Display Retrieved Data To Console
       if (document.empty){
         this.db.collection('utenti').add(userData);
         this.resetForm(form);
         this.startTest = true;
         this.message = 'Information is successfully saved!'
         this.snackbar.open(this.message, undefined, config);
       } else {
         this.startTest = false;
         this.message = 'User has already done the text';
         this.resetForm(form);
         this.snackbar.open(this.message, undefined, config);
        }
      })
      .catch((error) => {
        console.log(`Error getting documents: ${error}`);
      });
  }

}
