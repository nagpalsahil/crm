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
  findLatestOwner: Policy;
  ref: DynamicDialogRef;
  productHeader: any[];
  customerDtlsHeader:any[];
  hasData=false;

  constructor(public messageService: MessageService, public dialogService: DialogService) {}

  ngOnInit() {
    this.customerDtlsHeader=[
      {field: 'ownerClientId', header: 'Owner client ID'},
      {field: 'ownerName', header: 'Owner Name'},
      {field: 'ownerGender', header: 'Owner Gender'},
      {field: 'ownerExactOccupation', header: 'Owner exact occupation' },
      {field: 'numberOfPolicies', header: 'Number of policies' },
      {field: 'channel', header: 'Channel' },
      {field: 'education', header: 'Education' }
    ];
    this.productHeader = [
      { field: 'applicationNumber', header: 'Application Number' },
      { field: 'planName', header: 'Plan name' },
      { field: 'policyInforcementDate', header: 'Policy Inforcement date' },
      { field: 'policyTerm', header: 'Policy term (PT)' },
      { field: 'policyPayingTerm', header: 'Premium paying term (PPT)' },
      { field: 'policyStatusAsOnMonthend', header: 'Policy status as on Monthend' },
      { field: 'annualizedTargetPermium', header: 'Annualized Target Premium' },
      {field: 'policyAging', header: 'Policy aging (in month and days)' },
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
      this.findLatestOwner= this.filteredPolicies[0];
      for (let i = 1; i < this.filteredPolicies.length; i++) {
        if(new Date(this.filteredPolicies[i].policyInforcementDate)>new Date(this.findLatestOwner.policyInforcementDate)){
          this.findLatestOwner=this.filteredPolicies[i];
        }
      }
      this.hasData=this.filteredPolicies.length>0;
  });
  }
}
