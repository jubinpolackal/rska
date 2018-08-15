import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationmanagerComponent } from './locationmanager.component';

describe('LocationmanagerComponent', () => {
  let component: LocationmanagerComponent;
  let fixture: ComponentFixture<LocationmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
