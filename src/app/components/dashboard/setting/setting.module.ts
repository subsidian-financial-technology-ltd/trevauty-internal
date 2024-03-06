import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RefundTransactionComponent } from '../refund-transaction/refund-transaction.component';
import { MaterialModule } from '../manage-terminal/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SettingComponent } from './setting.component';
// import { RefundTransactionComponent } from '..'

@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap:[SettingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingModule { }
