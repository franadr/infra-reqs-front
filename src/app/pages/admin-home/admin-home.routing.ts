

import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from './admin-home.component';
import {AdminComponent} from '../admin-VM/admin.component';
export const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
    { path: 'vm-admin', component: AdminComponent }
  ]},

];

export const routing = RouterModule.forChild(routes);
