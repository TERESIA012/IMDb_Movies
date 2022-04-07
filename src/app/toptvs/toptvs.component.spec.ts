import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptvsComponent } from './toptvs.component';

describe('ToptvsComponent', () => {
  let component: ToptvsComponent;
  let fixture: ComponentFixture<ToptvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
