import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import {
  AppHeaderComponent,
  AppBoardListComponent,
  AppBoardComponent,
  AppBoardFormComponent,
  AppCardComponent,
} from './components';

// store
import { Store } from 'src/store';

// effects
import { BoardEffects } from 'src/store/effects';
import { AppCardFormComponent } from './components/app-card-form/app-card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppBoardListComponent,
    AppBoardComponent,
    AppBoardFormComponent,
    AppCardComponent,
    AppCardFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Store,
    EffectsModule.forRoot([BoardEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
