import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {HeroesModule} from './heroes/heroes.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {HeroService} from './heroes/hero-service/hero.service';
import {MessageService} from './messages/message-service/message.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HeroesModule,
    DashboardModule
  ],
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [HeroService,
  MessageService]
})
export class AppModule { }
