import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-feedback',
  templateUrl: './contact-feedback.component.html',
  styleUrls: ['./contact-feedback.component.scss']
})

export class ContactFeedbackComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.open("Your message was recieved. Thank you!", "CLOSE");
  }
}
