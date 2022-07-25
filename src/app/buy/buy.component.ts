import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product/product.component';
import { ShoppingCart } from '../shopping-cart/shopping-cart.component';
import { ShoppingService } from '../services/shopping.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  durationInSeconds = 3;

  buyProducts: Product[] = [];

  constructor(private productService: ProductService, private shoppingService: ShoppingService, public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.buyProducts = this.productService.getBuyProducts();
  }

  addItemToShoppingCart(newItem: ShoppingCart) {
    this.shoppingService.addNewItemToShoppingCart(newItem);
    this.shoppingService.printItems();
  }

  openDialog(item: Product): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      width: '750px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { title: item.title, state: item.state, description: item.description, price: item.price, imageSource: item.imageSource, id: item.id, availability: item.availability, readmore: item.readmore}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      //this.price = result.data;
    });
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
  text: string = "Item added to shopping-cart!";
}

export class DialogOverviewExampleDialog {

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ShoppingCart) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}