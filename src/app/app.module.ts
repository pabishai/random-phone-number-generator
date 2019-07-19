import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {
  MatTableModule,
  MatInputModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatCardModule,
  MatGridListModule,
  MatSortModule,
  MatIconModule} from '@angular/material';

import { GenerateNumbersComponent } from './generate-numbers/generate-numbers.component';


@NgModule({
  declarations: [
    AppComponent,
    GenerateNumbersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatSortModule,
    MatIconModule
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
