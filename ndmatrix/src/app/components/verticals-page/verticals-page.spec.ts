import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalsPage } from './verticals-page';

describe('VerticalsPage', () => {
  let component: VerticalsPage;
  let fixture: ComponentFixture<VerticalsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
