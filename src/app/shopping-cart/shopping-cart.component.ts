import { NgModule, Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { CustomPipe } from '../custom.pipe';

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

}

export interface ShoppingCart {
  id: number;
  title: string;
  state: string;
  description: string;
  price: string;
  imageSource: string;
}