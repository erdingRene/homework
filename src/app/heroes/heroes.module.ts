import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HeroesComponent,
    HeroDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [HeroesComponent,
    HeroDetailComponent]
})
export class HeroesModule { }
