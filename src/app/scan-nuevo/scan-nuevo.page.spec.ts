import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanNuevoPage } from './scan-nuevo.page';

describe('ScanNuevoPage', () => {
  let component: ScanNuevoPage;
  let fixture: ComponentFixture<ScanNuevoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanNuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
