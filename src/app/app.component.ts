import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './authentication/auth.service';
import { Member } from './model/member.model';

@Component({
  selector: 'userApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'userApp';
  member: Member;
  isLoggedIn: boolean;

  constructor(private route: Router, private authService: AuthService) {}
  // logIn(): void {
  //   this.authService.login().subscribe((isLoggedIn) => {
  //     this.isLoggedIn = isLoggedIn;
  //     let redirect = this.authService.redirectUrl
  //       ? this.authService.redirectUrl
  //       : '/list';
  //     this.route.navigate([redirect]);
  //   });
  // }

  logout(): void {
    this.isLoggedIn = false;
    this.route.navigate(['/']);
  }
}
