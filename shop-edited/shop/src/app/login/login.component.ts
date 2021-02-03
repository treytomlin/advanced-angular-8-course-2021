import { Component, OnInit } from '@angular/core';
import { AuthService, LoginRequest} from '../auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg: string

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(userId: string, password: string) {
    let req: LoginRequest = { userId: userId, password: password}

    this.authSvc.login(req).subscribe(
      _ => this.router.navigate(['/']),
      _ => this.errorMsg = "Login failed")
  }

}
