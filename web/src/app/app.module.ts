import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent, AppBoardListComponent, AppBoardComponent } from './components';

import { Store } from '../store';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppBoardListComponent, AppBoardComponent],
  imports: [BrowserModule, FormsModule, Store],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
