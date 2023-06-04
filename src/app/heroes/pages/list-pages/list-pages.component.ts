import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styles: [
  ]
})
export class ListPagesComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroService: HeroesService) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe( heroes => this.heroes = heroes );
  }
}
