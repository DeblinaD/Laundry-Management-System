import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId = '';
  password = ' ';
  message = ' ';

  signIn () {
    if(this.userId == 'admin' && this.password == 'admin'){
      this.router.navigateByUrl('/home');
    }
    else{
      this.message = 'Invalid username or password';
      }
  }

  constructor(private router : Router) { }


  ngOnInit(): void {
  }
}
  



