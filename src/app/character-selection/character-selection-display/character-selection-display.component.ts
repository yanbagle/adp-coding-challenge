import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Character} from '../../models/Character';

@Component({
  selector: 'app-character-selection-display',
  templateUrl: './character-selection-display.component.html',
  styleUrls: ['./character-selection-display.component.css']
})

// Dumb/presentation component
export class CharacterSelectionDisplayComponent implements OnInit, OnChanges {

  @Input() characters;
  @Input() films;
  @Input() error;
  @Output() selectedCharacter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public emitSelection(character: Character) {
    this.selectedCharacter.emit(character);
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
