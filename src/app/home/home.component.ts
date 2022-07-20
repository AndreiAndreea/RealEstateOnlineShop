import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public date=new Date;
public name="Angular";
public person={
  "firstName":"Andreea",
  "lastName":"Andrei"
}
  title: string = "Home Page";
  buttonDisable: boolean = true;
  color: string = "navy";

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