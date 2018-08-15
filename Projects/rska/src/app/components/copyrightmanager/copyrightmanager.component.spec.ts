import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightmanagerComponent } from './copyrightmanager.component';

describe('CopyrightmanagerComponent', () => {
  let component: CopyrightmanagerComponent;
  let fixture: ComponentFixture<CopyrightmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyrightmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
