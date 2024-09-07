import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(readonly http: HttpClient) {
    this.menuItems$ = this.http.get(
      assetsConfig.path.menuItemsList
    ) as Observable<MenuItemVm[]>;
  }

  public openOrCloseMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
