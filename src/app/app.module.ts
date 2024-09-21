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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { NewsLettterEffects } from './store/news-letter/news-letter.effects';
import { RemoveSubscriptionComponent } from './components/remove-subscription/remove-subscription.component';
import { SpinnerService } from 'src/shared/services/spinner.service';

const effects = [RecipesEffects, RecipeCategoriesEffects, RecipeBlogsEffects, NewsLettterEffects];

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
    RemoveSubscriptionComponent,
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
    NgxPaginationModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()), SpinnerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
