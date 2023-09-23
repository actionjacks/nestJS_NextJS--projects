import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    // default route
    component: CalendarComponent,
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  { component: CalendarComponent, path: 'calendar' },
  { component: HeroesComponent, path: 'heroes' },
  { component: HeroDetailComponent, path: 'detail/:id' },
  { component: DashboardComponent, path: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
