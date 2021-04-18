import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    name:'',
    password:''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.authService.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/home'])
      },
      err => {
        console.log(err);
        this.router.navigate(['/home'])
      }
    ) 
  }
}
