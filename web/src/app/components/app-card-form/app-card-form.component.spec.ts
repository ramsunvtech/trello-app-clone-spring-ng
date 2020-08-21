import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardFormComponent } from './app-card-form.component';

describe('AppCardFormComponent', () => {
  let component: AppCardFormComponent;
  let fixture: ComponentFixture<AppCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
