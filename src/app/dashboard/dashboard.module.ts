import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'  ;

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from '../shared/shared.module';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';


@NgModule({
  declarations: [
    HomeComponent,
    EmployeeListComponent,
    ReimbursementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    SharedModule

    
  ]
})
export class DashboardModule { }
