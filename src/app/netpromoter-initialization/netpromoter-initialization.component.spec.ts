import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetpromoterInitializationComponent } from './netpromoter-initialization.component';

describe('NetpromoterInitializationComponent', () => {
  let component: NetpromoterInitializationComponent;
  let fixture: ComponentFixture<NetpromoterInitializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetpromoterInitializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetpromoterInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
