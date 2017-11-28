import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Character} from '../character-selection/models/Character';

@Injectable()
export class MessageService {

  private url = '';

  constructor(private httpClient: HttpClient) {
  }

  getSomething(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.url);
  }

}
