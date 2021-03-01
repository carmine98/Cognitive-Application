import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CognitiveTestComponent } from './BTACT-wordListRecall/cognitive-test.component';
import {FormsModule} from '@angular/forms';
import { ExplainBTACTComponent } from './explain-btact/explain-btact.component';

import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';

import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SymbolDigitModalitiesTestComponent } from './symbol-digit-modalities-test/symbol-digit-modalities-test.component';
import { ExplainArrowsTestComponent } from './explain-arrows-test/explain-arrows-test.component';
import { ArrowsTestComponent } from './arrows-test/arrows-test.component';
import { ArrowsTestRealComponent } from './arrows-test-real/arrows-test-real.component';
import { BeforeArrowComponent } from './before-arrow/before-arrow.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { AdminComponent } from './admin/admin.component';
import { InsertNewTestIDComponent } from './insert-new-test-id/insert-new-test-id.component';
import { ReportUserComponent } from './report-user/report-user.component';
import {MatOptionModule} from '@angular/material/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CognitiveTestComponent,
    ExplainBTACTComponent,
    DialogBodyComponent,
    SymbolDigitModalitiesTestComponent,
    ExplainArrowsTestComponent,
    ArrowsTestComponent,
    ArrowsTestRealComponent,
    BeforeArrowComponent,
    FinalPageComponent,
    AdminComponent,
    ReportUserComponent,
    InsertNewTestIDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }),
    MatSnackBarModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
