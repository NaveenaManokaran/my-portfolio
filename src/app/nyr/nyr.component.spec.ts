import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyrComponent } from './nyr.component';

describe('NyrComponent', () => {
  let component: NyrComponent;
  let fixture: ComponentFixture<NyrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
