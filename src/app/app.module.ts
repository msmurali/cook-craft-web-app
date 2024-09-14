import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { RecipesEffects } from './store/recipes/recipes.effects';
import { RecipeBlogsEffects } from './store/recipe-blogs/recipe-blogs.effects';
import { RecipeCategoriesEffects } from './store/recipe-categories/recipe-categories.effects';
import { EffectsModule } from '@ngrx/effects';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { TrendingRecipesComponent } from './components/trending-recipes/trending-recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './components/blog/blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { TrendingBlogsComponent } from './components/trending-blogs/trending-blogs.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipePageComponent } from './components/pages/recipe-page/recipe-page.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { BlogsPageComponent } from './components/pages/blogs-page/blogs-page.component';
import { NgxPaginationModule } from 'ngx-pagination';


const effects = [RecipesEffects, RecipeCategoriesEffects, RecipeBlogsEffects];

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    HomePageComponent,
    HeaderComponent,
    CategoriesComponent,
    RecipesListComponent,
    TrendingRecipesComponent,
    RecipeComponent,
    SearchBarComponent,
    BlogComponent,
    BlogListComponent,
    TrendingBlogsComponent,
    SubscriptionComponent,
    FooterComponent,
    RecipePageComponent,
    CategoryPageComponent,
    BlogsPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([...effects]),
    MenubarModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
