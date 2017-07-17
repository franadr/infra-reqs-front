

import {OrderModule} from 'ngx-order-pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgaModule} from '../../theme/nga.module';
import {CommonModule} from '@angular/common';
import {routing} from './request-home.routing';
import {NgModule} from '@angular/core';
import { RequestHomeComponent} from './request-home.component';

import {RequestsComponent} from '../requests/requests.component';
import {RequestModificationComponent} from '../request-modification/request-modification.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,
    ReactiveFormsModule,
    OrderModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    RequestHomeComponent,
    RequestsComponent,
    RequestModificationComponent,
  ],
  exports: [
    RequestHomeComponent,
    RequestsComponent,
    RequestModificationComponent,
  ]
})
export class RequestHomeModule {}
