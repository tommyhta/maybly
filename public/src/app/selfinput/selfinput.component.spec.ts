import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfinputComponent } from './selfinput.component';

describe('SelfinputComponent', () => {
  let component: SelfinputComponent;
  let fixture: ComponentFixture<SelfinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
