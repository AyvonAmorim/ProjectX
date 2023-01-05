import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRetiroComponent } from './create-retiro.component';

describe('CreateRetiroComponent', () => {
  let component: CreateRetiroComponent;
  let fixture: ComponentFixture<CreateRetiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRetiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
