import {Component, OnDestroy, OnInit} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { IHero } from './hero';
import { HeroService } from './hero-service/hero.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  heroes: IHero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().pipe(
      takeUntil(this.ngUnsubscribe))
      .subscribe(heroes => this.heroes = heroes);
  }

  trackByHeroID (index: number, hero: any): number {
    return hero.id;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
