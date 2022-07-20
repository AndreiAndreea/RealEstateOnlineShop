import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  title: string = "Welcome to" ;
  subtitle:string="Hestia Real Estate";

  ngOnInit(): void {
  }

}
