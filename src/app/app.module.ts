import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankLayoutComponent } from "./layouts/blank-layout/blank-layout.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BlankLayoutComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
