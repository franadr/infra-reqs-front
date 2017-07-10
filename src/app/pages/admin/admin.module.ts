import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './admin.routing';
import { AdminComponent } from './admin.component';
import {NgaModule} from '../../theme/nga.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgaModule,

  ],
  declarations: [
    AdminComponent,
  ]
})
export class AdminModule {}
