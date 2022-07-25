import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  numberOfItems: number = 0;

  constructor(private shoppingService: ShoppingService) {
    this.numberOfItems = this.shoppingService.getSize();
  }

  ngOnInit(): void {
  }

  updateNumberOfItems() {
    this.numberOfItems = this.shoppingService.getSize();
  }

}
