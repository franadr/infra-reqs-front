import { Component, OnInit } from '@angular/core';
import {AdminGuard} from "../../_guard/admin.guard";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private allowed = false

  constructor(private adminGuard: AdminGuard) { }

  ngOnInit() {
    this.allowed = this.adminGuard.canActivate();
  }

}
