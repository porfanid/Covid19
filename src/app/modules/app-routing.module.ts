import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataComponent} from '../data/data.component';
import {BarchartComponent} from '../barchart/barchart.component';
import {MainPageComponent} from '../main-page/main-page.component';

export const routes: Routes = [
  { path: ':country', component: MainPageComponent},
  { path: '', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
