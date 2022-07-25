import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit {

  fromPage: string = "test";
  fromDialog: string = "";

  id: number = 0;
  title: string = "";
  state: string = "";
  description: string = "";
  price: string = "";
  availability: string = "";
  imageSource: string = "";
  readmore: string = "";

  constructor(public dialogRef: MatDialogRef<CustomDialogComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: Product) {
    //this.fromPage = data.title;
  }

  ngOnInit() {
    this.id = this.data.id;
    this.title = this.data.title;
    this.state = this.data.state;
    this.description = this.data.description;
    this.price = this.data.price;
    this.availability = this.data.availability;
    this.imageSource = this.data.imageSource;
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
    console.log(this.title + "\n" + this.fromDialog);
  }

  saveDialog() {
    this.data.id = this.id;
    this.data.title = this.title;
    this.data.state = this.state;
    this.data.description = this.description;
    this.data.price = this.price;
    this.data.availability = this.availability;
    this.data.imageSource = this.imageSource;

    return this.data;
  }

}
