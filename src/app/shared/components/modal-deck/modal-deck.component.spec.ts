import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeckComponent } from './modal-deck.component';

describe('ModalDeckComponent', () => {
  let component: ModalDeckComponent;
  let fixture: ComponentFixture<ModalDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeckComponent]
    });
    fixture = TestBed.createComponent(ModalDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
