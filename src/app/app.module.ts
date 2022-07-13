import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material imports
import { LoginComponent } from './login/login.component'; //login page
import { NavbarComponent } from './navbar/navbar.component'; //navbar page
import { MatIconModule } from '@angular/material/icon'; //icon
import { ProductComponent } from './product/product.component'; //toolbar

//login page custom
import { MatInputModule } from '@angular/material/input'; //input
import { MatButtonModule } from '@angular/material/button'; //buton
import { MatCardModule } from '@angular/material/card'; //card

//navbar page custom
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  // chestii create de noi
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProductComponent,
    HomeComponent
  ],
  // module importate din material
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // acces la unele servicii
  providers: [],
  // :P
  bootstrap: [AppComponent]
})
export class AppModule { }