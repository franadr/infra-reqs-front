

import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from './admin-home.component';
import {AdminComponent} from '../admin-VM/admin.component';
import {AdminVMmodificationComponent} from '../admin-VMmodification/admin-vmmodification.component';
export const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
    { path: 'vm-admin', component: AdminComponent },
    { path: 'vm-mod', component: AdminVMmodificationComponent }
  ]},

];

export const routing = RouterModule.forChild(routes);
