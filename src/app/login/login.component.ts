import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private auth: AuthService,
    public fromBuilder: FormBuilder,
    private router: Router
  ) {

  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fromBuilder.group({
      userName: [''],
      password: ['']
    })


  }



  Submit() {
    let username = this.loginForm.get('userName')?.value;
    let password = this.loginForm.get('password')?.value;

    this.auth.userLogin(username, password)
      .subscribe((Response: any) => {
        console.log(Response.token);
        localStorage.setItem('token', Response.token);
        if (Response.token) {
          this.router.navigateByUrl('/home');
        }
      });
  }


}
