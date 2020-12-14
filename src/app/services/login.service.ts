import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  url = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  //calling the server to generate the token;
  generateToken(credentials: any) {
    //token generation;
    return this.http.post(`${this.url}/token`, credentials);
  }

  //for login user;
  loginUser(token) {
    localStorage.setItem("token", token);
    return true;
  }

  //for checking user is logged in or not;
  isLoggedIn() {
    let token = localStorage.getItem("token");

    if (token == undefined || token == '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  //for logout;
  logout() {
    localStorage.removeItem('token');
    location.reload();
    return true;
  }

  //for getting the token;
  getToken() {
    return localStorage.getItem('token');
  }

}
