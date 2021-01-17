import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideBreadcomsComponent } from './right-side-breadcoms.component';

describe('RightSideBreadcomsComponent', () => {
  let component: RightSideBreadcomsComponent;
  let fixture: ComponentFixture<RightSideBreadcomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideBreadcomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideBreadcomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
