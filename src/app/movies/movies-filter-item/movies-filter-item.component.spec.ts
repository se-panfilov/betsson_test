import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MoviesFilterItemComponent } from './movies-filter-item.component'

describe('MoviesFilterItemComponent', () => {
  let component: MoviesFilterItemComponent
  let fixture: ComponentFixture<MoviesFilterItemComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesFilterItemComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFilterItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
