import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientReviewComponent, DialogElementsExampleDialog } from './client-review/client-review.component';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AngularEmojisModule } from 'angular-emojis';


@NgModule({
  declarations: [
    AppComponent, 
    ClientReviewComponent,
    DialogElementsExampleDialog
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    CommonModule,
    MatIconModule,
    AngularEmojisModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
