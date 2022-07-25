import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  title: string = "";
  description: string = "";
  price: string = "";

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.productService.createBuyProduct(this.title, this.description, this.price, "brasov", "poiana brasov", "to buy", "sdjcnksjdc");
    this.router.navigateByUrl("products");
  }
}
