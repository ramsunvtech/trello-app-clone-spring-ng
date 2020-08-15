import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBoardListComponent } from './app-board-list.component';

describe('AppBoardListComponent', () => {
  let component: AppBoardListComponent;
  let fixture: ComponentFixture<AppBoardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBoardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
