import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVmComponent } from './edit-vm.component';

describe('EditVmComponent', () => {
  let component: EditVmComponent;
  let fixture: ComponentFixture<EditVmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
