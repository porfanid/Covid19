import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataComponent } from './main-page/data/data.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { BarchartComponent } from './main-page/barchart/barchart.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RssFeedComponent } from './rss-feed/rss-feed.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DataPageComponent } from './data-page/data-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ModalContentComponent } from './data-page/modal-content/modal-content.component';
import { HeadTitleComponent } from './head-title/head-title.component';
import { TourismPageComponent } from './tourism-page/tourism-page.component';
import { LoginComponent } from './login/login.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { SymptomsPageComponent } from './symptoms-page/symptoms-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    TopMenuComponent,
    BarchartComponent,
    LoadingPageComponent,
    ContextMenuComponent,
    MainPageComponent,
    RssFeedComponent,
    FooterComponent,
    DataPageComponent,
    ModalContentComponent,
    HeadTitleComponent,
    TourismPageComponent,
    LoginComponent,
    SymptomsPageComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeFr, 'fr-FR');
  }
}
