import { Component, OnInit } from '@angular/core';
import { MasterComponent } from '../master.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  model: any[];

  constructor(public master: MasterComponent) { }

  ngOnInit() {
      this.model = [
          {
              items: [
                  {label: 'SFM Candiidate data',icon: 'pi pi-fw pi-users', routerLink: ['/main/user-list']},
                  {label: 'Code Section',icon: 'pi pi-fw pi-list', routerLink: ['/main/question-list']}
              ]
          }
      ];
  }

  onKeydown(event: KeyboardEvent) {
      const nodeElement = (<HTMLDivElement> event.target);
      if (event.code === 'Enter' || event.code === 'Space') {
          nodeElement.click();
          event.preventDefault();
      }
  }
}
