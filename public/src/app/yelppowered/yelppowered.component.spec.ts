import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YelppoweredComponent } from './yelppowered.component';

describe('YelppoweredComponent', () => {
  let component: YelppoweredComponent;
  let fixture: ComponentFixture<YelppoweredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelppoweredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelppoweredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
