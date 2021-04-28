import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolaillesComponent } from './volailles.component';

describe('VolaillesComponent', () => {
  let component: VolaillesComponent;
  let fixture: ComponentFixture<VolaillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolaillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
