import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatRadioModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MissesComponent } from './components/misses/misses.component';
import { DebtsComponent } from './components/debts/debts.component';
import { MarksComponent } from './components/marks/marks.component';
import {DataTableModule} from './common/data-table/data-table.module';
import {PreloadingSpinnerModule} from './common/preloading-spinner/preloading-spinner.module';
import {StoreModule} from '@ngrx/store';
import {missesReducer} from './state/reducers/misses.reducer';
import {MissesEffects} from './state/effects/misses.effects';
import {EffectsModule} from '@ngrx/effects';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {marksReducer} from './state/reducers/marks.reducer';
import {MarksEffects} from './state/effects/marks.effects';
import {debtsReducer} from './state/reducers/debts.reducer';
import {DebtsEffects} from './state/effects/debts.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MissesComponent,
    DebtsComponent,
    MarksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRadioModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    DataTableModule,
    PreloadingSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      misses: missesReducer,
      marks: marksReducer,
      debts: debtsReducer
    }),
    EffectsModule.forRoot([
      MissesEffects,
      MarksEffects,
      DebtsEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
