import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-character-selection-display',
  templateUrl: './character-selection-display.component.html',
  styleUrls: ['./character-selection-display.component.css']
})
export class CharacterSelectionDisplayComponent implements OnInit, OnChanges {

  @Input() characters;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
