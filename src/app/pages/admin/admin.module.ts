import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { routing } from './admin.routing';
import { AdminComponent } from './admin.component';
import {NgaModule} from '../../theme/nga.module';
import { EditVmComponent } from './edit-vm/edit-vm.component';
import {DateFormatter} from '@angular/common/src/pipes/intl';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
    ReactiveFormsModule,


  ],
  declarations: [
    AdminComponent,
    EditVmComponent,
  ]
})
export class AdminModule {}
