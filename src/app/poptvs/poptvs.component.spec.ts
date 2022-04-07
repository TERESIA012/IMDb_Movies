import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoptvsComponent } from './poptvs.component';

describe('PoptvsComponent', () => {
  let component: PoptvsComponent;
  let fixture: ComponentFixture<PoptvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoptvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoptvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
