import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { BlogsPageComponent } from './components/pages/blogs-page/blogs-page.component';
import { RecipePageComponent } from './components/pages/recipe-page/recipe-page.component';
import { RemoveSubscriptionComponent } from './components/remove-subscription/remove-subscription.component';

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
  {
    path: 'blogs',
    component: BlogsPageComponent,
    title: 'Cook Craft Blogs',
  },
  {
    path: 'recipe/:recipeId',
    component: RecipePageComponent,
    title: 'Cook Craft Recipe',
  },
  {
    path: 'unsubscribe',
    component: RemoveSubscriptionComponent,
    title: 'Cook Craft - Unsubscribe Newsletter',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
