import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  buyProducts: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.buyProducts = this.productService.getBuyProducts();
  }

}
