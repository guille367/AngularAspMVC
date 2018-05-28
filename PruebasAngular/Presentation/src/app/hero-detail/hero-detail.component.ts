import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero = null

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  loadHero(heroId: number): void {
    this.heroService.getHeroById(heroId)
      .subscribe(hero => this.hero = hero)
  }

  ngOnInit() {
    const heroId = +this.route.snapshot.paramMap.get('id')
    this.loadHero(heroId)
  }

  goBack(): void {
    this.location.back()
  }

}
