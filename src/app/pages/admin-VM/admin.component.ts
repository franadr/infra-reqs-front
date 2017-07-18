import { Component, OnInit } from '@angular/core';

import {RequestsService} from '../../_services/requests.service';
import {VirtualMachine} from '../../model/VM';

@Component({
  selector: 'admin',
  templateUrl: 'admin2.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private allowed = null;
  listOfVMRequest: VirtualMachine[];
   loading = true;
   selectedVMedit: VirtualMachine;
   selectedVMdelete: VirtualMachine;
   selectedVMvalidate: VirtualMachine;
  created = false;
  order = 'id';
   error = false;
   errorMessage: string;
   reverse = false;
  constructor(private requestService: RequestsService) { }

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
      this.allowed = true;
      this.error = false},
      error2 => {
        if (error2.status === 500) {window.alert(error2 + ' See the server logs' );
        } else { window.alert(error2); }
        this.allowed = false;
        this.loading = false;
        this.error = true;
      }
    );

  }
  updateStatus(vm: any , status: string) {
    vm.vMrequestjpa.status = status;
    if (window.confirm('Do you want to update status to ' + status)) {
      this.requestService.postRequestModification(vm).subscribe(res => {
        if (res) {
          console.log(vm.id + ' successfully modified status');
          this.refresh('all');
        } else {
          this.error = true;
          console.log(vm.id + ' not modified');
        }
      },
        error2 => {
          if (error2.status === 500) {window.alert(error2 + ' See the server logs' );
          } else { window.alert(error2); }
        }); }

    this.refresh('all');

  }

  selectEdit(vm: VirtualMachine): void {
    this.clearEdit();
    this.selectedVMedit = vm;

  }
  selectDelete(): void {
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
    this.reverse = !this.reverse;
  }


}
