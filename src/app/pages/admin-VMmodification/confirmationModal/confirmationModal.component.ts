

import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RequestsService} from '../../../_services/requests.service';

@Component({
  selector: 'confirmationModal',
  styleUrls: [('./confirmationModal.component.css')],
  templateUrl: './confirmationModal.component.html'
})

export class ConfirmationModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private requestService: RequestsService) {
  }

  ngOnInit(): void {}

  validateMessage(message?: string) {
    if (message) {
      this.activeModal.close(message);
    } else {
      this.activeModal.close();
    }
  }

  closemodal() {
    this.activeModal.close();
  }

}
