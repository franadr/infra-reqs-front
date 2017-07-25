

import {OrderModule} from 'ngx-order-pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';
import {CommonModule} from '@angular/common';
import {routing} from './admin-home.routing';
import {NgModule} from '@angular/core';
import {AdminHomeComponent} from './admin-home.component';
import {AdminComponent} from '../admin-VM/admin.component';

import {EditVmComponent} from '../admin-VM/edit-vm/edit-vm.component';

import {AdminVMmodificationComponent} from '../admin-VMmodification/admin-vmmodification.component';
import {ConfirmationModalComponent} from '../admin-VMmodification/confirmationModal/confirmationModal.component';
import {NgbModal, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
    ReactiveFormsModule,
    OrderModule,
    NgbModalModule
  ],
  declarations: [
    AdminHomeComponent,
    AdminComponent,
    EditVmComponent,
    AdminVMmodificationComponent,
    ConfirmationModalComponent
  ],
  exports: [
    AdminComponent,
    AdminHomeComponent,
    EditVmComponent,
    AdminVMmodificationComponent,
  ],
  entryComponents: [
    ConfirmationModalComponent
  ]
})
export class AdminHomeModule {}
