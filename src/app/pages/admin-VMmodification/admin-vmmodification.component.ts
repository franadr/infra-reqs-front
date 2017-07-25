import { Component, OnInit } from '@angular/core';
import {VirtualMachine} from '../../model/VM';
import {RequestsService} from '../../_services/requests.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationModalComponent} from './confirmationModal/confirmationModal.component';
import {ThreadMessage} from '../../model/ThreadMessage';

@Component({
  selector: 'app-admin-vmmodification',
  templateUrl: './admin-vmmodification.component.html',
  styleUrls: ['./admin-vmmodification.component.scss']
})
export class AdminVMmodificationComponent implements OnInit {
  private vmMod: VirtualMachine[];
  private vm: VirtualMachine[];
  error = false;
  private selectedID = null;
  private formerVM: VirtualMachine = null;
  private modVM: VirtualMachine = null;
  constructor(private requestService: RequestsService, private modalService: NgbModal) { }

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
          if (res.requestResult) {
            if (accept) {
              window.alert('Modification accepted and sent');
            }else {
              window.alert('Modification discarded ' + res.content);
            }
            this.selectedID = null;
            this.getVMmodRequest();
          }
        },
        error2 => {
          {window.alert(error2.content + ' See the server logs' ); }
        });
  }

  messageConfirmationShow(id: any) {
    const activeModal = this.modalService.open(ConfirmationModalComponent, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'discard confirmation';
    const discardMessage = new ThreadMessage();
    discardMessage.date = new Date(Date.now());
    discardMessage.origin = localStorage.getItem('ladp');

    activeModal.result.then((res) => {
    if (res) {
      this.triggerModification(id, false);
      discardMessage.content = res;
      this.requestService.postThreadMessage(discardMessage, id).subscribe(res => {
          if (res) {
            console.log('Message sent for vm ' + id);
            window.alert('Message envoyé pour la vm ' + id);
          } else {
            this.error = true;
            console.log('message non envoyé');
          }
        },
        error2 => window.alert('Erreur :'+error2));
      console.log('Discard message sent');
    }
    });


  }
}
