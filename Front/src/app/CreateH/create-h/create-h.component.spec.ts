import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHComponent } from './create-h.component';

describe('CreateHComponent', () => {
  let component: CreateHComponent;
  let fixture: ComponentFixture<CreateHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHComponent]
    });
    fixture = TestBed.createComponent(CreateHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
