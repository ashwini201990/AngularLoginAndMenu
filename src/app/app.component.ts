import { Component } from '@angular/core';
import {AuthService} from './service/auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  constructor( private auth: AuthService)
  {

  }
  tokencheck() {
    let token = localStorage.getItem('token');
    if (!token) {
      return false
    }
    return true
  }
}
