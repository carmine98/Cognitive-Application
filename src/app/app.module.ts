import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { CognitiveTestComponent } from './cognitive-test/cognitive-test.component';
import {FormsModule} from '@angular/forms';

const firebaseConfig = {
  apiKey: 'AIzaSyA0qW5UNzOdLzK9JaqsuYDH1ny0g7tXgKA',
  authDomain: 'cognitive-application.firebaseapp.com',
  databaseURL: 'https://cognitive-application.firebaseio.com',
  projectId: 'cognitive-application',
  storageBucket: 'cognitive-application.appspot.com',
  messagingSenderId: '346635690371',
  appId: '1:346635690371:web:a8cfa6aae9fa28a47396b6',
  measurementId: 'G-NLPLYHS7MZ'
};




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CognitiveTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireStorageModule,
    FormsModule,
    // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
