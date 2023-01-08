import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastosComponent } from './pastos.component';

describe('PastosComponent', () => {
  let component: PastosComponent;
  let fixture: ComponentFixture<PastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
