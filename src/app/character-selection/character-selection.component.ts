import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../services/character-service';
import {Character} from './models/Character';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent implements OnInit {

  public characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe( (data) => {
      this.characters = data.characters;
    });
  }

}
