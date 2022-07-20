import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  items: ShoppingCart[] = [];

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    this.items = this.shoppingService.getShoppingCart();
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