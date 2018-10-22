import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/Auth.service';
import { AlertifyService } from '../Services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) {

  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.alertify.error('Not logged in');
    this.router.navigate(['home']);
    return false;
  }
}
