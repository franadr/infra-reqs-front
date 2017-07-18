import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVMmodificationComponent } from './admin-vmmodification.component';

describe('AdminVMmodificationComponent', () => {
  let component: AdminVMmodificationComponent;
  let fixture: ComponentFixture<AdminVMmodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVMmodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVMmodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
