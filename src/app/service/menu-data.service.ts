import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';
import { CustomStepsMenuItem } from '../models/menu-step-item.model';
import { CustomMenuResource } from '../models/menu-resource.model';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    private resourceDialog = new Subject<string>();
    changeEmitted$ = this.resourceDialog.asObservable();

    emitChange(data: string) {
        this.resourceDialog.next(data);
    }

    getMenuList(): CustomMenuItem[] {
        return [
            {
                Label: 'Dashboard', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
            },
            {
                Label: 'My Estimates', Icon: 'fa-calculator', RouterLink: null, Childs: [
                    { Label: 'Create Estimate', RouterLink: '/main/my-estimate/create-estimate', Childs: null, IsChildVisible: false },
                    { Label: 'Estimate List', RouterLink: '/main/my-estimate/estimate-view', Childs: null, IsChildVisible: false }
                ], IsChildVisible: true
            },
            {
                Label: 'Market Place', Icon: 'fa-shopping-cart', RouterLink: '/main/market-place', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Admin', Icon: 'fa-tools', RouterLink: null, Childs: [
                    { Label: 'Rules', RouterLink: '/main/rules/rules-list', Childs: null, IsChildVisible: false },
                    { Label: 'Rate Card', RouterLink: '/main/rate-card/rate-card-list', Childs: null, IsChildVisible: false },
                    { Label: 'Active RateCard Year', RouterLink: '/main/activeratecard/view', Childs: null, IsChildVisible: false }                    
                ], IsChildVisible: true                
           },
           {
               Label: 'Finance', Icon: 'fa-dollar-sign', RouterLink: null, Childs: [
                   { Label: 'Approver List', RouterLink: '/main/finance-approver/approver-list', Childs: null, IsChildVisible: false },
                   { Label: 'Approver estimate', RouterLink: '/main/estimate-approver/estimate-list', Childs: null, IsChildVisible: false }                   
               ], IsChildVisible: true                
          }
        ];
    }


    getStepList(): CustomStepsMenuItem[] {
        return [
            { label: 'Estimate', routerLink: 'estimate' },
            { label: 'Stake Holder Details', routerLink: 'stakeholder' },
            { label: 'Application Details', routerLink: 'project' },
            { label: 'Verify And Save', routerLink: 'verify' }
        ];
    }
}
