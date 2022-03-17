import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { DashboardRoutingModule } from './dashboard.routing';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
