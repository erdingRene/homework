import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IHero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../messages/message.service';
import { HttpClient } from '@angular/common/http';
import {HeroesModule} from './heroes.module';


@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  getHeroes(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/heroes')
      .pipe(catchError(err => of(`Error: ${err}`)));
  }

  getHero(id: number): IHero {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return HEROES.find(hero => hero.id === id);
  }

  trackByHeroID (index: number, hero: any): number {
    return hero.id;
  }
}
