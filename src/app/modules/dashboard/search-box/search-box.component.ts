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
    let policyDtls:any;
    for (let i = 0; i < this.policies.length; i++) {
      const policy = this.policies[i];
      if (policy.applicationNumber == this.searchValue || policy.ownerClientId == this.searchValue) {
        policyDtls=this.policies[i];
        break;
      }
    }
    if(policyDtls){
      for (let i = 0; i < this.policies.length; i++) {
        if (this.policies[i].ownerClientId == policyDtls.ownerClientId) {
            filtered.push(this.calculateData(this.policies[i]));
        }
      }
      this.ref.close(filtered);
    }
    else{
      this.showError=true;
    }    
  }
  calculateData(data): any{
    let firstDate = new Date(data.policyInforcementDate);
    let currentDate= new Date();
    let diff=currentDate.getTime() - firstDate.getTime();
    data.policyAging = diff;
    return data;
  }
}
