import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
  @Input()
  recievedParentMessage: string = "";
  @Output()
  messageToEmit = new EventEmitter<string>();

  messageToSendChild: string = "Hello parent!";

  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message);
  }
}
