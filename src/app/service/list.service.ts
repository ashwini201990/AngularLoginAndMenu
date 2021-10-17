import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get(`https://reqres.in/api/users?page=2`);
  }
  getSingleUserList() {
    return this.http.get(`https://reqres.in/api/users/2`);
  }
  pageNOtFound() {
    return this.http.get(`https://reqres.in/api/unknown/23`);
  }
}
