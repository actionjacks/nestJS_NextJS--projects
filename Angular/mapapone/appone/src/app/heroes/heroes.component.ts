import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'hero-use-to-render-in-template',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // creates a HeroesComponent, the Dependency Injection
  constructor(
    private heroService: HeroService,
    // podaje typ klasy angular wstrzykuje zaleznosci
    private messageService: MessageService
  ) {}

  heroProp = 'heroProp';

  hero: Hero = {
    id: 1,
    name: 'fobar',
  };

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHeroHTTP({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHeroHTTP(hero.id).subscribe();
  }
}
