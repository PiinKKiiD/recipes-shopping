import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      SharedModule,
      CoreModule,
      BrowserAnimationsModule,

  ],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
