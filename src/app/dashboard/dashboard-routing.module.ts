import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';

const routes: Routes = [
  {path: 'home' , component:HomeComponent},
  {path:'employeelist', component:EmployeeListComponent},
  {path: 'reimbursement' ,component: ReimbursementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
