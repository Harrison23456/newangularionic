import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanbarPage } from './scanbar.page';

describe('ScanbarPage', () => {
  let component: ScanbarPage;
  let fixture: ComponentFixture<ScanbarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
