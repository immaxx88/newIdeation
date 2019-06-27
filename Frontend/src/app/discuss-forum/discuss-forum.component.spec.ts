import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussForumComponent } from './discuss-forum.component';

describe('DiscussForumComponent', () => {
  let component: DiscussForumComponent;
  let fixture: ComponentFixture<DiscussForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
