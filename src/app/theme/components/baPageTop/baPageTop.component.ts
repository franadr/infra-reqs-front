import {Component, OnInit} from '@angular/core';

import {GlobalState} from '../../../global.state';
import { AuthGuard } from '../../../_guard/auth.guard';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../_services/authentication.service";

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss'],
})
export class BaPageTop implements OnInit {
  ngOnInit(): void {
    if (this.auth.canActivate()){
      console.log('auth is true');
    this.connectedUser = localStorage.getItem('currentTri');
    }
  }

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;
  public logged = this.auth.canActivate() ;
  public connectedUser: string;

  constructor(private _state: GlobalState, private auth: AuthGuard,private router : Router,private authService: AuthenticationService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public toggleLogout(){

    this.authService.logout();
    this.router.navigate(['/login']);


  }
}
