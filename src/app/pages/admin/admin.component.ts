import { Component, OnInit } from '@angular/core';
import {AdminGuard} from '../../_guard/admin.guard';

import {RequestsService} from '../../_services/requests.service';
import {ARequest} from '../../model/Request';
import {VirtualMachine} from '../../model/VM';
import {VmRequest} from "../../model/VMrequest";

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
  private selectedVMedit: VirtualMachine;
  private selectedVMdelete: VirtualMachine;
  private selectedVMvalidate: VirtualMachine;
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
    this.selectedVMedit = null;
    this.selectedVMdelete = null;
    this.selectedVMvalidate = null;

    this.requestService.getVMrequest(filter).subscribe(data => {
      this.listOfVMRequest = data;
      this.listOfVMRequest.forEach(vm => vm.validityDate = new Date(vm.validityDate));
      this.loading = false});

  }

  selectEdit(vm: VirtualMachine): void {
    console.log(vm.vmName);
    this.selectedVMdelete = null;
    this.selectedVMvalidate = null;
    this.selectedVMedit = vm;
  }
  selectDelete(vm: VirtualMachine): void {
    this.selectedVMedit = null;
    this.selectedVMvalidate = null;
    this.selectedVMdelete = vm;
  }



}
