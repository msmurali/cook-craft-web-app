import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemVm } from '@app/models/menu-item';
import { assetsConfig } from '@configs/assets.config';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public menuItems$!: Observable<MenuItemVm[]>;
  public isMenuOpen: boolean = false;

  constructor(readonly http: HttpClient, readonly router: Router) {
    this.menuItems$ = this.http.get(
      assetsConfig.path.menuItemsList
    ) as Observable<MenuItemVm[]>;
  }

  public openOrCloseMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public navigateTo(menuItem: MenuItemVm) {
    this.router.navigate([`${menuItem?.path}`], {
      fragment: menuItem?.fragment,
    });
  }
}
