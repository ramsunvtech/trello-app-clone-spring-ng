import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components';

import { Store } from '../store';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent],
  imports: [BrowserModule, Store],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
