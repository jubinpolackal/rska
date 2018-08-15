import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsmanagerComponent } from './instructorsmanager.component';

describe('InstructorsmanagerComponent', () => {
  let component: InstructorsmanagerComponent;
  let fixture: ComponentFixture<InstructorsmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorsmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
