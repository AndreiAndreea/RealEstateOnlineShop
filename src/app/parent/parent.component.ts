import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  receivedChildMessage: string = "";
  messageToSendToParent: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToChild(message: string) {
    this.messageToSendToParent = message;
  }

  getMessage(message: string) {
    this.receivedChildMessage = message;
  }
}
