import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from '../main-page/main-page.component';
import {DataPageComponent} from '../data-page/data-page.component';
import {TourismPageComponent} from '../tourism-page/tourism-page.component';
import {LoginComponent} from '../login/login.component';
import {SymptomsPageComponent} from '../symptoms-page/symptoms-page.component';
import {ContactPageComponent} from '../contact-page/contact-page.component';

export const routes: Routes = [
  { path: 'data/:wikiLink', component: DataPageComponent},
  { path: 'data', component: DataPageComponent},
  { path: 'tourism', component: TourismPageComponent},
  { path: 'symptoms', component: SymptomsPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'login', component: LoginComponent},
  { path: ':country', component: MainPageComponent},
  { path: '', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
