import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';

import { RequestsComponent } from './requests.component';
import {routing} from './requests.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
  ],
  declarations: [],
})
export class RequestsModule { }
