import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesstoapplyComponent } from './processtoapply.component';

describe('ProcesstoapplyComponent', () => {
  let component: ProcesstoapplyComponent;
  let fixture: ComponentFixture<ProcesstoapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesstoapplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesstoapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
