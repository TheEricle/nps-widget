import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetpromoterFormComponent } from './netpromoter-form.component';

describe('NetpromoterFormComponent', () => {
  let component: NetpromoterFormComponent;
  let fixture: ComponentFixture<NetpromoterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetpromoterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetpromoterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
