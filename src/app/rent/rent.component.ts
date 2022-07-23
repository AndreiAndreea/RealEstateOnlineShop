import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product/product.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss'],
  styles: [
    `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  ]
})
export class RentComponent implements OnInit {

  durationInSeconds = 5;

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  rentProducts: Product[] = [];

  constructor(private productService: ProductService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.rentProducts = this.productService.getRentProducts();
  }

}

export class PizzaPartyComponent {}