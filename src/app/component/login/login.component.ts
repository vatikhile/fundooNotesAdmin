import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  email = new FormControl('');
  password = new FormControl('');
  ngOnInit() {
  }


  login() {

    console.log('login ', this.email.value, '    ', this.password.value);
    $.ajax({
      url: 'http://34.213.106.173/api/user/adminLogin',
      type: 'POST',
      dataType: 'json',
      data: {
        "email": this.email.value,
        "password": this.password.value
      },
      success: function (data) {
        console.log('data ', data);
        //  this.router.navigate(["dashboard"]);
        this.router.navigate(['dashboard'])

      },
      error: function (request, status, error) {
        alert("invalid email and password")
      }
    })

  }

}

