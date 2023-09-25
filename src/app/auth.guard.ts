import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    // Replace this condition with your own logic
    const isAuthenticated =false;
    
    if (localStorage.getItem('isLogin')=='true') {
      return true; // Allow access to the route
    } else {
      return this.router.createUrlTree(['/login']); // Redirect to the login page
  }
}
}