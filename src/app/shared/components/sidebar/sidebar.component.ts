import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { treeMenu, TreeMenu } from 'src/assets/data/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  public treeMenu: TreeMenu[] = treeMenu;

  constructor(private router: Router) {}

  ngOnInit() {
    const url = this.router.url.substring(1)
    this.checkActiveMenu(url);
  }

  public onClickMenu(menu) {
    this.checkActiveMenu(menu.link);
    this.router.navigate([menu.link]);
  }

  private checkActiveMenu(url) {
    this.treeMenu.forEach((item) => {
      if (item.link == url) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
}
