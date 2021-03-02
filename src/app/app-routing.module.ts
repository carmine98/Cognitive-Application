import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CognitiveTestComponent } from './BTACT-wordListRecall/cognitive-test.component';
import { ExplainBTACTComponent} from './explain-btact/explain-btact.component';
import { SymbolDigitModalitiesTestComponent } from './symbol-digit-modalities-test/symbol-digit-modalities-test.component';
import { ExplainArrowsTestComponent } from './explain-arrows-test/explain-arrows-test.component';
import { ArrowsTestComponent } from './arrows-test/arrows-test.component';
import { ArrowsTestRealComponent } from './arrows-test-real/arrows-test-real.component';
import { BeforeArrowComponent } from './before-arrow/before-arrow.component';
import { FinalPageComponent} from './final-page/final-page.component';
import {AdminComponent} from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import {InsertNewTestIDComponent} from './insert-new-test-id/insert-new-test-id.component';
import {ReportUserComponent} from './report-user/report-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'btact', component: CognitiveTestComponent },
  { path: 'explain-btact', component: ExplainBTACTComponent },
  { path: 'symbol', component: SymbolDigitModalitiesTestComponent },
  { path: 'explain-arrows', component: ExplainArrowsTestComponent },
  { path: 'arrows-test-tutorial', component: ArrowsTestComponent },
  { path: 'arrows-test', component: ArrowsTestRealComponent },
  { path: 'before', component: BeforeArrowComponent },
  { path: 'final', component: FinalPageComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'insert', component: InsertNewTestIDComponent, canActivate: [AuthGuard]},
  {path: 'report', component: ReportUserComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
