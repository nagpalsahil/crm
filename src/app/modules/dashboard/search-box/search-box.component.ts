import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Policy } from 'src/app/models/policy.model';
import { PolicyService } from 'src/app/service/policyService';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {
  policies: any[];
  loading:boolean = true;
  fieldsArr: any[];
  hasData:boolean=false;
  showError:boolean=false;
  searchValue:string;
  
  constructor(private policyService: PolicyService, public ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.policyService.getPolicies().then(policies => {
      this.policies = policies;
  });
  }

  searchData(){ 
    const filtered: any[] = [];
    for (let i = 0; i < this.policies.length; i++) {
        const policy = this.policies[i];
        if (policy.applicationName == this.searchValue || policy.ownerClientId == this.searchValue) {
            filtered.push(this.calculateData(policy));
        }
    }
    this.hasData=filtered.length>0;
    if(this.hasData){
      this.ref.close(filtered);
    }
    else
      this.showError=true;

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
