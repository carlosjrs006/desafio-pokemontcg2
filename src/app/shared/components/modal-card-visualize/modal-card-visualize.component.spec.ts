import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCardVisualizeComponent } from './modal-card-visualize.component';

describe('ModalCardVisualizeComponent', () => {
  let component: ModalCardVisualizeComponent;
  let fixture: ComponentFixture<ModalCardVisualizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCardVisualizeComponent]
    });
    fixture = TestBed.createComponent(ModalCardVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
