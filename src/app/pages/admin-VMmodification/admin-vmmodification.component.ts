import { Component, OnInit } from '@angular/core';
import {VirtualMachine} from '../../model/VM';
import {RequestsService} from '../../_services/requests.service';

@Component({
  selector: 'app-admin-vmmodification',
  templateUrl: './admin-vmmodification.component.html',
  styleUrls: ['./admin-vmmodification.component.scss']
})
export class AdminVMmodificationComponent implements OnInit {
  private vmMod: VirtualMachine[];
  private vm: VirtualMachine[];
  private error = false;
  private selectedID = null;
  private formerVM: VirtualMachine = null;
  private modVM: VirtualMachine = null;
  constructor(private requestService: RequestsService) { }

  ngOnInit() {
    this.getVMmodRequest();
  }

  getVMmodRequest() {
    this.requestService.getModificationRequest().subscribe(res => {
      this.vmMod = res;
      this.vmMod.forEach(vm => vm.validityDate = new Date(vm.validityDate));
      console.log('vm modification request gathered');
    },
      error2 => {window.alert(error2);
                        this.error = true; });
    this.requestService.getVMrequest('all').subscribe(res => {
        this.vm = res;
        this.vm.forEach(vm => vm.validityDate = new Date(vm.validityDate));
        console.log('vm request gathered');
      },
      error2 => {
        if (error2.status === 500) {window.alert(error2 + ' See the server logs' );
        } else { window.alert(error2); }
      });



  }

  selectView(id: any) {
    this.selectedID = id;
    this.modVM = this.vmMod.find(v => v.id === this.selectedID);
    this.formerVM = this.vm.find(v => v.id === this.selectedID);
  }

  triggerModification(id, accept) {
    this.requestService.validateModification(id, accept).subscribe(res => {
      if (res) {
        if (accept) {
          window.alert('Modification accepted and sent');
        }else {
          window.alert('Modification discarded');
        }
        this.selectedID = null;
        this.getVMmodRequest();
      }
    },
      error2 => {
        if (error2.status === 500) {window.alert(error2 + ' See the server logs' );
        } else { window.alert(error2); }
      });
  }
}
