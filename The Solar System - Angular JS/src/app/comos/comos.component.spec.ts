import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComosComponent } from './comos.component';

describe('ComosComponent', () => {
  let component: ComosComponent;
  let fixture: ComponentFixture<ComosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComosComponent]
    });
    fixture = TestBed.createComponent(ComosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
