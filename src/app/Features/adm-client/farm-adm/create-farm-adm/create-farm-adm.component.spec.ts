import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFarmAdmComponent } from './create-farm-adm.component';

describe('CreateFarmAdmComponent', () => {
  let component: CreateFarmAdmComponent;
  let fixture: ComponentFixture<CreateFarmAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFarmAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFarmAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
