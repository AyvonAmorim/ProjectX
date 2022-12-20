import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabAdmComponent } from './colab-adm.component';

describe('ColabAdmComponent', () => {
  let component: ColabAdmComponent;
  let fixture: ComponentFixture<ColabAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColabAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColabAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
