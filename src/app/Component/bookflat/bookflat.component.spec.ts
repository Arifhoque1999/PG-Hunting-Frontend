import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookflatComponent } from './bookflat.component';

describe('BookflatComponent', () => {
  let component: BookflatComponent;
  let fixture: ComponentFixture<BookflatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookflatComponent]
    });
    fixture = TestBed.createComponent(BookflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
