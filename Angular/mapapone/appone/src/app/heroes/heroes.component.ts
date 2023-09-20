import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes/mock-heros';

@Component({
  selector: 'hero-use-to-render-in-template',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroProp = 'heroProp';

  hero: Hero = {
    id: 1,
    name: 'fobar',
  };

  heroes = HEROES;
}
