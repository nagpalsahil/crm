import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { SearchBoxComponent } from './search-box/search-box.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
