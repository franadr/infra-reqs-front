import { Component, OnInit } from '@angular/core';
import {AdminGuard} from '../../_guard/admin.guard';

import {RequestsService} from '../../_services/requests.service';
import {ARequest} from '../../model/Request';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private allowed = false;
  listOfRequests: ARequest[] ;
  private loading = false;
  constructor(private adminGuard: AdminGuard, private requestService: RequestsService) { }

  ngOnInit() {
    this.loading = true;
    this.allowed = this.adminGuard.canActivate();
    this.requestService.getRequests().subscribe(data =>{ this.listOfRequests = data; this.loading = false;});

  }



}
