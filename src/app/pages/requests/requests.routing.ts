/**
 * Created by Adriano on 04/07/2017.
 */
import { Routes, RouterModule } from '@angular/router';

import { RequestsComponent } from './requests.component';

const routes: Routes = [
  {
    path: '',
    component: RequestsComponent,
  },
];

export const routing = RouterModule.forChild(routes);
