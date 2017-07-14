import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { routing } from './admin.routing';
import { AdminComponent } from './admin.component';
import {NgaModule} from '../../theme/nga.module';
import { EditVmComponent } from './edit-vm/edit-vm.component';
import {OrderModule} from 'ngx-order-pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    ReactiveFormsModule,
    OrderModule,
  ],
  declarations: [
    AdminComponent,
    EditVmComponent,
  ]
})
export class AdminModule {}
