import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabAdmPageComponent } from './colab-adm-page.component';

describe('ColabAdmPageComponent', () => {
  let component: ColabAdmPageComponent;
  let fixture: ComponentFixture<ColabAdmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColabAdmPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColabAdmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
