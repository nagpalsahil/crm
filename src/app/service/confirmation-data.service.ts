import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDataService {

  constructor(private confirmationService: ConfirmationService) { }

  getDashboardConfirmation(): ConfirmationService {
    return this.confirmationService.confirm({
      message: 'There are no estimate in your account, Would you like to create new estimate?',
      header: 'Welcome!',
      icon: 'pi pi-info-circle',
      accept: () => {

      },
      reject: () => {

      },
      key: 'getDashboardConfirmation'
    });

  }
}
