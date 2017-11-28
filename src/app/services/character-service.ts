import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Character} from '../character-selection/models/Character';

@Injectable()
export class CharacterService {

  private url = '';
  private localJsonPath = 'assets/characters.json';

  constructor(private httpClient: HttpClient) {
  }

  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.localJsonPath);
  }

}
