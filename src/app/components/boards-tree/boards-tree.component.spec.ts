import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsTreeComponent } from './boards-tree.component';

describe('BoardsTreeComponent', () => {
  let component: BoardsTreeComponent;
  let fixture: ComponentFixture<BoardsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
