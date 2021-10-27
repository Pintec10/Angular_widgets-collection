import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledDividerComponent } from './titled-divider.component';

describe('TitledDividerComponent', () => {
  let component: TitledDividerComponent;
  let fixture: ComponentFixture<TitledDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitledDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitledDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
