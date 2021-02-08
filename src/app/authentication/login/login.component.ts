import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'userApp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  invalidCredentialMsg: string;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {
    this.loginForm = this.formbuilder.group({
      username: [],
      password: [],
    });
  }

  ngOnInit() {}

  onFormSubmit() {
    const uname = this.loginForm.get('username').value;
    const pwd = this.loginForm.get('password').value;
    this.authService.login(uname, pwd).subscribe((authenticated) => {
      if (authenticated) {
        this.router.navigate(['/list']);
      } else {
        this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
      }
    });
  }
}
