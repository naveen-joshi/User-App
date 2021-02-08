import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate() {
    if (this.authService.isAuthenticate) {
      return true;
    } else {
      window.alert("Don't have permission");
      return false;
    }
  }
}
