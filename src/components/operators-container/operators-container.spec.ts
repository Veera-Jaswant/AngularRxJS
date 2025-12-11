import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsContainer } from './operators-container';

describe('OperatorsContainer', () => {
  let component: OperatorsContainer;
  let fixture: ComponentFixture<OperatorsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
