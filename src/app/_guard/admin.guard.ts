import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {environment} from "../../environments/environment";

@Injectable()
export class AdminGuard implements CanActivate {
  private groupFilter = 'test';
  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('currentGroup') === this.groupFilter) {
      return true;
    }
    return false;
  }
}
