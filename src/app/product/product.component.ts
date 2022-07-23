import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  buyProducts: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.buyProducts = this.productService.getBuyProducts();
  }

}

export interface Product {
  id: number;
  title: string;
  state: string;
  description: string;
  price: string;
  imageSource: string;
  availability:string;
}