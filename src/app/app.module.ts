import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleDetailComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
