import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './Common/header/header.component';
import { SideMenuComponent } from './Common/side-menu/side-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
   
    SharedRoutingModule
  ],
  exports:[HeaderComponent,SideMenuComponent]
})
export class SharedModule { }
