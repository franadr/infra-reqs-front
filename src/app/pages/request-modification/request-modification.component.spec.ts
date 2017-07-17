import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestModificationComponent } from './request-modification.component';

describe('RequestModificationComponent', () => {
  let component: RequestModificationComponent;
  let fixture: ComponentFixture<RequestModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
