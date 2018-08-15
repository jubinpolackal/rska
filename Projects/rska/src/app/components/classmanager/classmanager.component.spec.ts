import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassmanagerComponent } from './classmanager.component';

describe('ClassmanagerComponent', () => {
  let component: ClassmanagerComponent;
  let fixture: ComponentFixture<ClassmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
