import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEComponent } from './create-e.component';

describe('CreateEComponent', () => {
  let component: CreateEComponent;
  let fixture: ComponentFixture<CreateEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEComponent]
    });
    fixture = TestBed.createComponent(CreateEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
