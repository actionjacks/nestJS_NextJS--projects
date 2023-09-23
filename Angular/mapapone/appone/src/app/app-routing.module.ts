import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { component: CalendarComponent, path: 'calendar' },
  { component: HeroesComponent, path: 'heroes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
