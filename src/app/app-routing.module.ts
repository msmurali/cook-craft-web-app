import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
    title: 'Cook Craft',
  },
  {
    path: 'category/:category',
    component: CategoryPageComponent,
    title: (routeSnapshot: ActivatedRouteSnapshot) =>
      `Recipe Category ${routeSnapshot?.params?.['category']}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
