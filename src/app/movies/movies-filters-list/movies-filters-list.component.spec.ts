import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFiltersListComponent } from './movies-filters-list.component';

describe('MoviesFiltersListComponent', () => {
  let component: MoviesFiltersListComponent;
  let fixture: ComponentFixture<MoviesFiltersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesFiltersListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFiltersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
