import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {OrderModule} from "ngx-order-pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    ReactiveFormsModule,
    OrderModule
  ],
  declarations: []
})
export class RequestModificationModule { }
