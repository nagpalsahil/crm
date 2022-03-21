import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Policy } from 'src/app/models/policy.model';
import { Product } from 'src/app/models/product';
import { PolicyService } from 'src/app/service/policyService';
import { SearchBoxComponent } from './search-box/search-box.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  filteredPolicies: Policy[];
  ref: DynamicDialogRef;
  fieldsArr: any[];
  hasData=false;

  constructor(public messageService: MessageService, public dialogService: DialogService) {}

  ngOnInit() {

    this.fieldsArr = [
      { field: 'ownerClientId', header: 'Owner client ID' },
      { field: 'applicationName', header: 'Application Number' },
      { field: 'channel', header: 'Channel' },
      { field: 'customerSegment', header: 'Customer segment' },
      { field: 'priority', header: 'Priority' },
      { field: 'hni', header: 'HNI' },
      { field: 'ownerExactOccupation', header: 'Owner exact occupation' },
      { field: 'annualizedTargetPermium', header: 'Annualized Target Premium' },
      { field: 'countOfPolicies', header: 'Count of policies' },
      { field: 'policyStatusAsOnMonthend', header: 'Policy status as on Monthend' },
      { field: 'planName', header: 'Plan name' },
      { field: 'education', header: 'Education' },
      { field: 'ownerName', header: 'Owner Name' },
      { field: 'ownerGender', header: 'Owner Gender' },
      { field: 'policyInforcementDate', header: 'Policy Inforcement date' },
      { field: 'policyAging', header: 'Policy aging (in month and days)' }
    ];
    if(!this.filteredPolicies){
      this.search();
    }
  }

  search(){
    this.ref = this.dialogService.open(SearchBoxComponent, {
      header: 'Application ID/ Owner client ID',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
  });

  this.ref.onClose.subscribe((policies:Policy[]) =>{
      this.filteredPolicies=policies;
      this.hasData=this.filteredPolicies.length>0;
  });
  }
}
