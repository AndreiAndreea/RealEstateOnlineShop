import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material imports
import { LoginComponent } from './login/login.component'; //login page
import { NavbarComponent } from './navbar/navbar.component'; //navbar page
import { MatIconModule } from '@angular/material/icon'; //icon
import { ProductComponent } from './product/product.component'; //toolbar
import { MatTooltipModule } from '@angular/material/tooltip';//tooltips
import { MatFormFieldModule } from '@angular/material/form-field';

//login page custom
import { MatInputModule } from '@angular/material/input'; //input
import { MatButtonModule } from '@angular/material/button'; //buton
import { MatCardModule } from '@angular/material/card'; //card

//navbar page custom
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { MatTableModule } from '@angular/material/table'; //table
import { MatBadgeModule } from '@angular/material/badge';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomPipe } from './custom.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ContactFeedbackComponent } from './contact-feedback/contact-feedback.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
// import { BuyComponent } from './buy/buy.component';
// import { RentComponent } from './rent/rent.component';
// import { AddProductComponent } from './add-product/add-product.component'; //icon badges

@NgModule({
  // chestii create de noi
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    routingComponent,
    ShoppingCartComponent,
    WelcomeComponent,
    CustomPipe,
    ParentComponent,
    ChildComponent,
    ContactFeedbackComponent,
    CustomDialogComponent,
    SnackBarComponent,
    // BuyComponent,
    // RentComponent,
    // AddProductComponent
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
    ReactiveFormsModule,
    MatTableModule,
    MatBadgeModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  // acces la unele servicii
  providers: [],
  // :P
  bootstrap: [AppComponent]
})
export class AppModule { }