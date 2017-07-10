import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule, } from '@angular/forms';


import {EditVmComponent} from './edit-vm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [EditVmComponent],
})
export class editvmModule { }
