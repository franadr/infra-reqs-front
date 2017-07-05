import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { RequestsComponent } from './requests.component';
import {routing} from './requests.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [RequestsComponent],
})
export class RequestsModule { }
