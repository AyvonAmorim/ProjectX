import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmBaseComponent } from './adm-base.component';

describe('AdmBaseComponent', () => {
  let component: AdmBaseComponent;
  let fixture: ComponentFixture<AdmBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
