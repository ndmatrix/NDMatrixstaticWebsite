import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NDMatrixHomePage } from './n-dmatrix-home-page';

describe('NDMatrixHomePage', () => {
  let component: NDMatrixHomePage;
  let fixture: ComponentFixture<NDMatrixHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NDMatrixHomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NDMatrixHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
