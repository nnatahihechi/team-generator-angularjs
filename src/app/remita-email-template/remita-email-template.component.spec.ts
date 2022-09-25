import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitaEmailTemplateComponent } from './remita-email-template.component';

describe('RemitaEmailTemplateComponent', () => {
  let component: RemitaEmailTemplateComponent;
  let fixture: ComponentFixture<RemitaEmailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitaEmailTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemitaEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
