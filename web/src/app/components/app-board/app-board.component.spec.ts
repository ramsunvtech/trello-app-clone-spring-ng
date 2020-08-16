import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppBoardComponent } from './app-board.component';

describe('AppBoardComponent', () => {
  let component: AppBoardComponent;
  let fixture: ComponentFixture<AppBoardComponent>;
  let titleElem: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppBoardComponent],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBoardComponent);
    component = fixture.componentInstance;
    titleElem = fixture.debugElement.query(By.css('.list-title')).nativeElement;

    component.boardItem = {
      title: 'Sample Title',
      id: 1,
      boardId: 1,
    };
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input title', () => {
    expect(titleElem.textContent).toContain('Sample Title');
  });
});
