import { NgModule, Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { CustomPipe } from '../custom.pipe';
import { NavbarComponent } from '../navbar/navbar.component';
import { AnimationDriver } from '@angular/animations/browser';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  durationInSeconds = 3;

  items: ShoppingCart[] = [];

  itemsValue: number = 0;

  constructor(private shoppingService: ShoppingService, private _snackBar: MatSnackBar ) {
  }

  ngOnInit(): void {
    this.items = this.shoppingService.getShoppingCart();
    
    this.itemsValue = new CustomPipe().transform(this.itemsValue, this.items);
  }

  removeItemShoppingCart(deleteItem: ShoppingCart) {

      let currentIndex = this.items.indexOf(deleteItem);
      this.items.splice(currentIndex, 1);

      console.log(this.items.length);      
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'app-snack-bar',
  templateUrl: '../snack-bar/snack-bar.component.html',
  styles: [
    `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})

export class PizzaPartyComponent {
  text: string = "Item removed from shopping-cart!";
}

export interface ShoppingCart {
  id: number;
  title: string;
  state: string;
  description: string;
  price: string;
  imageSource: string;
}