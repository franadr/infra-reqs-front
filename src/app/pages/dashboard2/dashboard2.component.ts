import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";
import {User_AD} from "../../model/User_AD";
import {JwtHelper} from "angular2-jwt";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {
  jwthelper: JwtHelper = new JwtHelper();
  isAdmin = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

    const token = localStorage.getItem('currentUser');
    const userad: User_AD = this.jwthelper.decodeToken(token);



    if (this.jwthelper.isTokenExpired(token)) {
      this.authService.logout();
    }
    userad.groups.forEach(g => {
      if (environment.allowedGroups.some(s => s === g)) {
        this.isAdmin = true;
      }
    });
  }

}
