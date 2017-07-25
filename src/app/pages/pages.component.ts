import {Component, OnInit} from '@angular/core';
import {Router, Routes} from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU, PAGE_MENU_NADMIN } from './pages.menu';
import {AuthenticationService} from '../_services/authentication.service';
import {JwtHelper} from 'angular2-jwt';
import {User_AD} from '../model/User_AD';
import {environment} from '../../environments/environment';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <!--
    <footer class="al-footer clearfix">
      <div class="al-footer-right" translate>{{'general.created_with'}} <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://akveo.com" translate>{{'general.akveo'}}</a> 2016</div>

      </div>
    </footer>
    -->
    <ba-back-top position="200"></ba-back-top>
  `
})
export class Pages implements OnInit {
  jwthelper: JwtHelper = new JwtHelper();

  constructor(private _menuService: BaMenuService, private authService: AuthenticationService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('currentUser');
    const userad: User_AD = this.jwthelper.decodeToken(token);


    let isAdmin = false;
    if (this.jwthelper.isTokenExpired(token)) {
      this.authService.logout();
    }
      userad.groups.forEach(g => {
        if (environment.allowedGroups.some(s => s === g)) {
          isAdmin = true;
        }
      });

      if (isAdmin) {
        this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
      }else {
        this._menuService.updateMenuByRoutes(<Routes>PAGE_MENU_NADMIN);
      }


  }
}
