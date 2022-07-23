import { NgModule, Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { CustomPipe } from '../custom.pipe';
import { NavbarComponent } from '../navbar/navbar.component';
import { AnimationDriver } from '@angular/animations/browser';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {


  items: ShoppingCart[] = [];

  itemsValue: number = 0;

  constructor(private shoppingService: ShoppingService) {

    
  }

  ngOnInit(): void {
    this.items = this.shoppingService.getShoppingCart();
    
    this.itemsValue = new CustomPipe().transform(this.itemsValue, this.items);
  }

  removeItemShoppingCart(deleteItem: ShoppingCart) {

      let currentIndex = this.items.indexOf(deleteItem);
      this.items.splice(currentIndex, currentIndex);

      return this.items;
      //this.shoppingService.setSize();
      
  }

}

export interface ShoppingCart {
  id: number;
  title: string;
  state: string;
  description: string;
  price: string;
  imageSource: string;
}