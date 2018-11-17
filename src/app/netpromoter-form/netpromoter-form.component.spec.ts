import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetPromoterFormComponent } from './netpromoter-form.component';

describe('NetpromoterFormComponent', () => {
  let component: NetPromoterFormComponent;
  let fixture: ComponentFixture<NetPromoterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetPromoterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetPromoterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
