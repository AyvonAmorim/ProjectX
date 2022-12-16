import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmClientComponent } from './adm-client.component';

describe('AdmClientComponent', () => {
  let component: AdmClientComponent;
  let fixture: ComponentFixture<AdmClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
