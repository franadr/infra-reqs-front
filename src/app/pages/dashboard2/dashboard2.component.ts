import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {
  private connectedUser: string;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.connectedUser = localStorage.getItem('currentTri');
  }

}
