

import {OrderModule} from 'ngx-order-pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';
import {CommonModule} from '@angular/common';
import {routing} from './admin-home.routing';
import {NgModule} from '@angular/core';
import {AdminHomeComponent} from './admin-home.component';
import {AdminComponent} from '../admin-VM/admin.component';
import {AdminModule} from '../admin-VM/admin.module';
import {EditVmComponent} from '../admin-VM/edit-vm/edit-vm.component';
import {RequestsService} from '../../_services/requests.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
    ReactiveFormsModule,
    OrderModule,
  ],
  declarations: [
    AdminHomeComponent,
    AdminComponent,
    EditVmComponent
  ],
  exports: [
    AdminComponent,
    AdminHomeComponent,
    EditVmComponent
  ]
})
export class AdminHomeModule {}
