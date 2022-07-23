import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactFeedbackComponent } from './contact-feedback/contact-feedback.component';
import { BuyComponent } from './buy/buy.component';
import { RentComponent } from './rent/rent.component';

const routes: Routes = [
  { path: '', redirectTo: "/welcome", pathMatch: "full" },
  {path:'welcome',component:WelcomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: "products", component: ProductComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "products/add-product", component: AddProductComponent },
  { path: "contact-feedback", component: ContactFeedbackComponent },
  { path: "buy", component: BuyComponent},
  { path: "rent", component: RentComponent},
  { path: '**', pathMatch: "full", component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [WelcomeComponent,HomeComponent, LoginComponent, PagenotfoundComponent,AddProductComponent,ContactFeedbackComponent, BuyComponent, RentComponent];