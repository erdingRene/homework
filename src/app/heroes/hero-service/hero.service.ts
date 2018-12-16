import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IHero } from '../hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from '../../messages/message-service/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<IHero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
