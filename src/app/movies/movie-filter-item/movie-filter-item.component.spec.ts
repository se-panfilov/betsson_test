import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFilterItemComponent } from './movie-filter-item.component';

describe('MovieFilterItemComponent', () => {
  let component: MovieFilterItemComponent;
  let fixture: ComponentFixture<MovieFilterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFilterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
