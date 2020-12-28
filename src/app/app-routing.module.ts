import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CognitiveTestComponent } from './BTACT-wordListRecall/cognitive-test.component';
import { ExplainBTACTComponent} from './explain-btact/explain-btact.component';
import { SymbolDigitModalitiesTestComponent } from './symbol-digit-modalities-test/symbol-digit-modalities-test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'btact', component: CognitiveTestComponent },
  { path: 'explain-btact', component: ExplainBTACTComponent},
  { path: 'symbol', component: SymbolDigitModalitiesTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
