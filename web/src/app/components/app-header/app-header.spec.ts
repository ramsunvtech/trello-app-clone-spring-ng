import { TestBed, async } from '@angular/core/testing';
import { AppHeaderComponent } from './app-header';

describe('AppHeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppHeaderComponent
      ],
    }).compileComponents();
  }));

  it('should have the logo and Header Title', () => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Trello Clone App');
  });

  it(`should have boards-menu`, () => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.board-menu .board-search')).toBeDefined();
    expect(
      compiled.querySelector('input').getAttribute('placeholder')
    ).toEqual('Enter to Search Board');
  });

  xit(`should have logo test`, () => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('logo > h1').textContent
    ).toEqual('Trello Clone App');
  });
});
