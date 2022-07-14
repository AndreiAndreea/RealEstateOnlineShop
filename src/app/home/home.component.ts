import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = "Home Title";
  buttonDisable: boolean = true;
  color: string = "green";

  newTitle: string ="test";

  constructor() { }

  ngOnInit(): void {
  }

  changeButton(): void {
    this.title = "New Title";
    this.color = "red";
  }

  changeTitle(): void {
   
  }


}