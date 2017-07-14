import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuard} from "../_guard/auth.guard";
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard2', pathMatch: 'full'},
      { path: 'dashboard2', loadChildren: './dashboard2/dashboard2.module#Dashboard2Module' },
      { path: 'admin', loadChildren: './admin-home/admin-home.module#AdminHomeModule' },
      { path: 'requests', loadChildren: './requests/requests.module#RequestsModule' },

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
