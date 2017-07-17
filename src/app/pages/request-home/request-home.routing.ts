

import {RouterModule, Routes} from '@angular/router';
import {RequestHomeComponent} from './request-home.component';

import {RequestsComponent} from '../requests/requests.component';
import {RequestModificationComponent} from "../request-modification/request-modification.component";
export const routes: Routes = [
  {
    path: '',
    component: RequestHomeComponent,
    children: [
      { path: 'new', component: RequestsComponent },
      { path: 'modification', component: RequestModificationComponent}
  ]},
];

export const routing = RouterModule.forChild(routes);
