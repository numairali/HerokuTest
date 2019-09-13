import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user-detail/user-detail.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailComponent
  ],
  imports: [
    HttpClientModule,
    MatDialogModule,
    BrowserModule,
    MatSortModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    HomeService,
    UserService
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [UserDetailComponent]

})
export class AppModule { }
