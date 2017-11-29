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
  public error;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    // initial call to get our characters from json file
    this.characterService.getCharacters().subscribe( (res) => {
      this.error = null;
      this.characters = res;
    },
      (err) => {
        this.handleError(err);
      });
  }

  // when user has selected a character, get their details
  public getCharacterDetails(character: Character) {
    this.characterService.getCharacterDetails(character).subscribe( (res) => {
      this.error = null;
      this.characterDetails = res;
      this.getFilms(this.characterDetails.films);
    },
      (err) => {
        this.handleError(err);
      });
  }

  // get film info
  public getFilms(films) {
    this.films = [];
    const tempFilms = [];
    films.forEach((filmUrl, index) => {
      this.characterService.getFilm(filmUrl).subscribe( (res) => {
        this.error = null;
        tempFilms.push(res);
        if (index === films.length - 1) {
          this.films = tempFilms;
        }
      },
        (err) => {
          this.handleError(err);
        });
    });
  }

  public handleError(err) {
    this.error = err;
    console.log(err);
  }

}
