import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainsComponent } from './complains.component';

describe('ComplainsComponent', () => {
  let component: ComplainsComponent;
  let fixture: ComponentFixture<ComplainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
