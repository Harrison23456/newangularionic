import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaDniPage } from './consulta-dni.page';

describe('ConsultaDniPage', () => {
  let component: ConsultaDniPage;
  let fixture: ComponentFixture<ConsultaDniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaDniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
