import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/models/policy.model';
import { PolicyService } from 'src/app/service/policyService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  policies: any[];
  filteredPolicies: Policy[];
  loading:boolean = true;
  fieldsArr: any[];
  hasData:boolean=false;
  searchValue:string;
  showError:boolean=false;

  constructor(private policyService: PolicyService) {}

  ngOnInit() {
    this.policyService.getPolicies().then(policies => {
        this.policies = policies;
    });

    this.fieldsArr = [
      { field: 'applicationName', header: 'Application Number' },
      { field: 'ownerExactOccupation', header: 'Owner exact occupation' },
      { field: 'annualizedTargetPermium', header: 'Annualized Target Premium' },
      { field: 'ownerClientId', header: 'Owner client ID' },
      { field: 'countOfPolicies', header: 'Count of policies' },
      { field: 'policyStatusAsOnMonthend', header: 'Policy status as on Monthend' },
      { field: 'channel', header: 'Channel' },
      { field: 'planName', header: 'Plan name' },
      { field: 'education', header: 'Education' },
      { field: 'customerSegment', header: 'Customer segment' },
      { field: 'hni', header: 'HNI' },
      { field: 'ownerName', header: 'Owner Name' },
      { field: 'ownerGender', header: 'Owner Gender' },
      { field: 'policyInforcementDate', header: 'Policy Inforcement date' },
      { field: 'policyAging', header: 'Policy aging (in month and days)' },
      { field: 'priority', header: 'Priority' },
    ];
  }

  searchData(){
    if(this.searchValue)
    { 
      const filtered: any[] = [];
      for (let i = 0; i < this.policies.length; i++) {
          const policy = this.policies[i];
          if (policy.applicationName == this.searchValue || policy.ownerClientId == this.searchValue) {
              filtered.push(this.calculateData(policy));
          }
      }
      this.filteredPolicies = filtered;
      this.hasData=this.filteredPolicies.length>0;
      console.log(this.filteredPolicies);
      this.showError=!this.hasData;
    }
  }
  calculateData(data): any{
    let firstDate = new Date(data.policyInforcementDate);
    let currentDate= new Date();
    let diff=currentDate.getTime() - firstDate.getTime();
    data.policyAging = diff;
    data.priority= Math.floor(Math.random() * 3)+ 1;
    return data;
  }
}
