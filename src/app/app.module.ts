import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { BarchartComponent } from './barchart/barchart.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RssFeedComponent } from './rss-feed/rss-feed.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
