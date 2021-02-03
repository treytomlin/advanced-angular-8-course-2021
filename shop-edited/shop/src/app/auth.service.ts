import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { tap} from 'rxjs/operators';
import decode from 'jwt-decode';

export class UserProfile {
  email: string
  name: string
}

export class LoginRequest {
  userId: string
  password: string
}

export class LoginResponse {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtToken: string
  userProfile: UserProfile

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest) : Observable<LoginResponse> {
    return this.http.post<LoginResponse>("/api/auth/login", credentials)
    .pipe(tap(response => {

     this.jwtToken = response.token
     this.userProfile = decode<UserProfile>(this.jwtToken)
    }))
  }

  logout() {
    this.jwtToken = undefined
  }

  isLoggedIn() : boolean {
    return this.jwtToken !== undefined &&
    this.jwtToken != null
  }
}
