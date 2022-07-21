import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    // name: new FormControl('', [Validators.pattern(/\s/), Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{15,}$')]),
    // confirmPassword: new FormControl('', Validators.required)
  });

  onSubmit(): void {
    // display some fireworks
  }

  hide = true;

  onLogin() {
    if (this.email === "test@test.com" && this.password === "testTEST12341234") {
      this.route.navigateByUrl('home');
      
      // alert("Login!");
    }
    else {
      //face redirect singur la page-not-found
      this.route.navigateByUrl('page-not-found');
      
      //alert("Wrong password");
    }
  }

}