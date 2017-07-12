import { Component, OnInit } from '@angular/core';
import {AdminGuard} from '../../_guard/admin.guard';

import {RequestsService} from '../../_services/requests.service';
import {ARequest} from '../../model/Request';
import {VirtualMachine} from '../../model/VM';

@Component({
  selector: 'admin',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private allowed = null;
  listOfRequests: ARequest[] ;
  listOfVMRequest: VirtualMachine[];
   loading = true;
   selectedVMedit: VirtualMachine;
   selectedVMdelete: VirtualMachine;
   selectedVMvalidate: VirtualMachine;
   pending = false;
   created = false;
   archive = false;
   order = 'id';
  constructor(private adminGuard: AdminGuard, private requestService: RequestsService) { }

  ngOnInit() {
    this.loading = true;
    this.refresh('all');

  }

  refresh(filter: string) {
    this.selectedVMedit = null;
    this.selectedVMdelete = null;
    this.selectedVMvalidate = null;

    this.requestService.getVMrequest(filter).subscribe(data => {
      this.listOfVMRequest = data;
      this.listOfVMRequest.forEach(vm => vm.validityDate = new Date(vm.validityDate));
      this.loading = false;
      this.allowed = true; },
    error2 => { if (error2.status === 403) {
      this.allowed = false;
      this.loading = false;
    } });

  }

  selectEdit(vm: VirtualMachine): void {
    this.clearEdit();
    this.selectedVMedit = vm;

  }
  selectDelete(vm: VirtualMachine): void {
    this.selectedVMedit = null;
    this.selectedVMvalidate = null;
    this.selectedVMdelete = null;
  }

  clearEdit() {
    this.selectedVMedit = null;
    this.selectedVMvalidate = null;
    this.selectedVMdelete = null;
  }

  orderTable(filter: string) {
    this.order = filter;
  }


}
