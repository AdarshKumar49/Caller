import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './Common/header/header.component';
import { SideMenuComponent } from './Common/side-menu/side-menu.component';
import { DetailsComponent } from './Common/details/details.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    DetailsComponent

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    
   
    SharedRoutingModule
  ],
  exports:[HeaderComponent,SideMenuComponent, DetailsComponent]
})
export class SharedModule { }
