import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
import {AuthGuard} from './_guard/auth.guard';

import {AdminGuard} from './_guard/admin.guard';
import {AuthenticationService} from './_services/authentication.service';
import {RequestsService} from './_services/requests.service';
import {CookieModule} from "ngx-cookie";
import {OrderModule} from "ngx-order-pipe";


// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState,
  AuthGuard,
  AuthenticationService,
  RequestsService,
  AdminGuard
];

export interface StoreType {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing,
    CookieModule.forRoot(),
    OrderModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS
  ]
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
