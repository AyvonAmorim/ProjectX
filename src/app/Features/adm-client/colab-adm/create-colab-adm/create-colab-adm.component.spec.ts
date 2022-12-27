import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColabAdmComponent } from './create-colab-adm.component';

describe('CreateColabAdmComponent', () => {
  let component: CreateColabAdmComponent;
  let fixture: ComponentFixture<CreateColabAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateColabAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateColabAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
