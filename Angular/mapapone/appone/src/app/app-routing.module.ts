import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
  { component: DashboardComponent, path: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
