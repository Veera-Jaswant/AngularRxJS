import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferCount } from './buffer-count';

describe('BufferCount', () => {
  let component: BufferCount;
  let fixture: ComponentFixture<BufferCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BufferCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BufferCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
