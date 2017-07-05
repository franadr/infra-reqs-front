import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuard} from './_guard/auth.guard';
import {Pages} from './pages/pages.component';

export const routes: Routes = [
  { path: '', component:Pages, canActivate: [AuthGuard] },
  { path: 'login', redirectTo: 'pages/login'},


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
