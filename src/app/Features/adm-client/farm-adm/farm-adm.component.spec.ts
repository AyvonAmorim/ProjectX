import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmAdmComponent } from './farm-adm.component';

describe('FarmAdmComponent', () => {
  let component: FarmAdmComponent;
  let fixture: ComponentFixture<FarmAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
