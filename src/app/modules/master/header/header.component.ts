import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MasterComponent } from '../master.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  
  constructor(public appMain: MasterComponent) { }
  
  ngOnInit(): void {
    
  }
}
