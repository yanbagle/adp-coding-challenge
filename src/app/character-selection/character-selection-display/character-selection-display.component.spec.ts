import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSelectionDisplayComponent } from './character-selection-display.component';

describe('CharacterSelectionDisplayComponent', () => {
  let component: CharacterSelectionDisplayComponent;
  let fixture: ComponentFixture<CharacterSelectionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSelectionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSelectionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
