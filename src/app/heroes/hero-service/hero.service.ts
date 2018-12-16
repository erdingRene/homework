import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IHero } from '../hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from '../../messages/message-service/message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<IHero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<IHero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
