import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './dashboard2.routing';
import {Dashboard2Component} from './dashboard2.component';
import {NgaModule} from '../../theme/nga.module';


@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
  ],
  declarations: [
    Dashboard2Component
  ]
})
export class Dashboard2Module { }
