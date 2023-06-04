import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroe-pages',
  templateUrl: './heroe-pages.component.html',
  styles: [
  ]
})
export class HeroePagesComponent implements OnInit {
  public hero?: Hero;

  constructor(private heroesSerive: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        //delay(3000),
        switchMap( ({id}) => this.heroesSerive.getHeroById(id)),
      ).subscribe( hero => {
        if(!hero) return this.router.navigate(['/heroes/list']);
        this.hero = hero;
        return;
      })
  }

  goBack(): void {
    this.router.navigateByUrl('/heroes/list')
  }
}
