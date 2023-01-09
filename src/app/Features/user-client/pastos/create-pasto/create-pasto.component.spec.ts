import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePastoComponent } from './create-pasto.component';

describe('CreatePastoComponent', () => {
  let component: CreatePastoComponent;
  let fixture: ComponentFixture<CreatePastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
