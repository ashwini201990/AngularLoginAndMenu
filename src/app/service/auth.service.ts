import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userLogin(username: string, password: string) {
    var data = { "email": username, "password": password }
    return this.http.post(`https://reqres.in/api/login`, data);
  }

logOut()
{
  localStorage.clear();
}
}
