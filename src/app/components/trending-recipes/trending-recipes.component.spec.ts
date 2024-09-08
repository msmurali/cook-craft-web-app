import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingRecipesComponent } from './trending-recipes.component';

describe('TrendingRecipesComponent', () => {
  let component: TrendingRecipesComponent;
  let fixture: ComponentFixture<TrendingRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
