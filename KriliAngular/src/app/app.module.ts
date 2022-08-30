import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KcHttpModule } from './@Core/core/kc-http.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KcHttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
