import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomAdviceComponent } from './random-advice/random-advice.component';
import { SearchAdviceComponent } from './search-advice/search-advice.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomAdviceComponent,
    SearchAdviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
