import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
  private groupFilter = 'collaborators';
  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('currentGroup') === this.groupFilter) {
      return true;
    }
    return false;
  }
}
