import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsflashmanagerComponent } from './newsflashmanager.component';

describe('NewsflashmanagerComponent', () => {
  let component: NewsflashmanagerComponent;
  let fixture: ComponentFixture<NewsflashmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsflashmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsflashmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
