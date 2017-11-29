import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../services/character-service';
import {Character} from '../models/Character';
import {CharacterDetails} from '../models/CharacterDetails';
import {Film} from '../models/Film';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent implements OnInit {

  public characters: Character[] = []; // characters gets passed down into dumb component
  public characterDetails: CharacterDetails;
  public films: Film[] = []; // films gets passed down into dumb component

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    // initial call to get our characters from json file
    this.characterService.getCharacters().subscribe( (res) => {
      this.characters = res;
    });
  }

  // when user has selected a character, get their details
  public getCharacterDetails(character: Character) {
    this.characterService.getCharacterDetails(character).subscribe( (res) => {
      this.characterDetails = res;
      this.getFilms(this.characterDetails.films);
    });
  }

  // get film info
  public getFilms(films) {
    films.forEach(filmUrl => {
      this.characterService.getFilm(filmUrl).subscribe( (res) => {
        this.films.push(res);
      });
    });
  }

}
