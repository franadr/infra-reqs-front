import { Component, OnInit } from '@angular/core';
import {AdminGuard} from '../../_guard/admin.guard';

import {RequestsService} from '../../_services/requests.service';
import {ARequest} from '../../model/Request';
import {VirtualMachine} from '../../model/VM';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private allowed = false;
  listOfRequests: ARequest[] ;
  listOfVMRequest: VirtualMachine[];
  private loading = false;
  constructor(private adminGuard: AdminGuard, private requestService: RequestsService) { }

  ngOnInit() {
    this.loading = true;
    this.allowed = this.adminGuard.canActivate();
    // this.requestService.getRequests().subscribe(data =>{ this.listOfRequests = data; this.loading = false;});
    this.requestService.getVMrequest('all').subscribe(data => {
      this.listOfVMRequest = data;
      this.listOfVMRequest.forEach(vm => vm.validityDate = new Date(vm.validityDate));
      this.loading = false});


  }

  refresh(filter: string) {
    this.requestService.getVMrequest(filter).subscribe(data => {
      this.listOfVMRequest = data;
      this.listOfVMRequest.forEach(vm => vm.validityDate = new Date(vm.validityDate));
      this.loading = false});
  }



}
