import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './admin.routing';
import { AdminComponent } from './admin.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,

  ],
  declarations: [
    AdminComponent,
  ]
})
export class AdminModule {}
