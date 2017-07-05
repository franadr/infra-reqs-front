/**
 * Created by Adriano on 04/07/2017.
 */
import { Routes, RouterModule }  from '@angular/router';

import { Dashboard2Component } from './dashboard2.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Dashboard2Component,

  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
