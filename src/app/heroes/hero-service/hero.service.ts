import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IHero } from '../hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from '../../messages/message-service/message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  getHeroes(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/heroes');
  }


  getHero(id: number): Observable<IHero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
