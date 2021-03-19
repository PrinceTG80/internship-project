import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdtComponent } from './pdt.component';

describe('PdtComponent', () => {
  let component: PdtComponent;
  let fixture: ComponentFixture<PdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
