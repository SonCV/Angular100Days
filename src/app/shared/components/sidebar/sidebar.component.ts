import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public treeMenu: TreeMenu[] = [
    {
      name: 'Day 1 - Installation',
      link: 'day1-installation',
      active: true,
      children: [],
    },
    {
      name: 'Day 2 - Angular app',
      link: 'day2-angular-app',
      active: false,
      children: [],
    },
    {
      name: 'Day 3 - Data binding',
      link: 'data-binding',
      active: false,
      children: [],
    },
    {
      name: 'Day 4 - Structure directive if else',
      link: 'structure-directive-if-else',
      active: false,
      children: []
    },
    {
      name: 'Day 5 - Structure directive ngFor',
      link: 'structure-directive-ngfor',
      active: false,
      children: []
    },
    {
      name: 'Day 6 - Attribute directive class style',
      link: 'attribute-directive-class-style',
      active: false,
      children: []
    },
    {
      name: 'Day 7 - Component interaction 1',
      link: 'component-interaction-1',
      active: false,
      children: []
    },
    {
      name: 'Day 8 - Component interaction 2',
      link: 'component-interaction-2',
      active: false,
      children: []
    },
    {
      name: 'Day 9 - Two way binding',
      link: 'two-way-binding',
      active: false,
      children: []
    },
    {
      name: 'Day 10 - Template variable viewchild viewchildren',
      link: 'template-variable-viewchild-viewchildren',
      active: false,
      children: []
    },
    {
      name: 'Day 11 - Typescript data type',
      link: 'typescript-data-type',
      active: false,
      children: []
    }
  ];

  constructor(private router: Router) {

  }

  public onClickMenu(menu, index) {
    this.checkActiveMenu(menu, index);
    this.router.navigate([menu.link]);
  }

  private checkActiveMenu(menu, index) {
    this.treeMenu.forEach((item, i) => {
      if ((index == i)) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
}

export interface TreeMenu {
  name: string;
  link: string;
  active: boolean;
  children: TreeMenu[];
}
