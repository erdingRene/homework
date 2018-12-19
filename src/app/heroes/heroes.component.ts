import {Component, OnDestroy, OnInit} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { IHero } from './hero';
import { HeroService } from './hero.service';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {
  private heroSubs: Subscription;
  heroes: IHero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
      this.heroSubs = this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes, (e) => {
        console.error(e);
      });
  }

  trackByHeroID (index: number, hero: any): number {
    return hero.id;
  }

  ngOnDestroy(): void {
    this.heroSubs.unsubscribe();
  }

}
