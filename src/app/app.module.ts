import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup'
import { SignupComponent } from './components/auth/signup/signup.component';
import { SinginComponent } from './components/auth/singin/singin.component';
import { PasswordresetComponent } from './components/auth/passwordreset/passwordreset.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PasswordRequestFormComponent } from './components/auth/password-request-form/password-request-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { BodyComponent } from './components/dashboard/body/body.component';
import { ClientsComponent } from './components/dashboard/clients/clients.component';
import { SublevelMenuComponent } from './components/dashboard/sidenav/sublevel-menu.component';
import { DocumentationComponent } from './components/dashboard/documentation/documentation.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DefaultArcObject } from 'd3-shape';
import { ScaleLinear, ScalePoint, ScaleTime, ScaleBand } from 'd3-scale';
import { CurveFactory } from 'd3-shape';
import { BaseType } from 'd3-selection';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SinginComponent,
    PasswordresetComponent,
    PasswordRequestFormComponent,
    DashboardComponent,
    SidenavComponent,
    OverviewComponent,
    BodyComponent,
    ClientsComponent,
    SublevelMenuComponent,
    DocumentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxOtpInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxChartsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
