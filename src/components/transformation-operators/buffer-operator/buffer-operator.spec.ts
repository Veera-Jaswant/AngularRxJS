import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferOperator } from './buffer-operator';

describe('BufferOperator', () => {
  let component: BufferOperator;
  let fixture: ComponentFixture<BufferOperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BufferOperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BufferOperator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
