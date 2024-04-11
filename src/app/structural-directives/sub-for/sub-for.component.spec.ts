import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubForComponent } from './sub-for.component';

describe('SubForComponent', () => {
  let component: SubForComponent;
  let fixture: ComponentFixture<SubForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubForComponent]
    });
    fixture = TestBed.createComponent(SubForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
