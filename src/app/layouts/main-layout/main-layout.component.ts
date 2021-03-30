import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  sideBarOpen = true;
  items: MenuItem[];
  home: MenuItem;

  constructor() {}
  ngOnInit(): void {
    this.items = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' },
    ];

    this.home = { icon: 'pi pi-home' };
  }

  sideBarToggler(value) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
