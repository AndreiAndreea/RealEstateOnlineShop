import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  text: string = "empty";

  constructor() { }

  ngOnInit(): void {
  }

}
