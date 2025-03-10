import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { AuthGuard } from '../services/auth.guard';
import { TrackerComponent } from '../pages/tracker/tracker.component';
import { HomeSummaryComponent } from '../pages/home-summary/home-summary.component';
import { ChatComponent } from '../pages/chat/chat.component';
import { TrendComponent } from '../pages/trend/trend.component';
import { ToiletComponent } from '../pages/toilet/toilet.component';
import { PooformComponent } from '../components/TRACKER/pooform/pooform.component';
import { TrackerSummaryComponent } from '../components/TRACKER/summary/summary.component';
import { RecordsComponent } from '../components/TRACKER/records/records.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeSummaryComponent, canActivate: [AuthGuard] }, //authenticated home page on login
  {
    path: 'tracker', component: TrackerComponent, canActivate: [AuthGuard],
    children: [ 
                { path: '', redirectTo: 'summary', pathMatch: 'full' }, 
                { path: 'summary', component: TrackerSummaryComponent}, 
                { path: 'new',component: PooformComponent},
                { path: 'records',component: RecordsComponent}
              ],
  },
  {
    path: 'trends',
    component: TrendComponent,
    canActivate: [AuthGuard],
    children: [],
  },
  {
    path: 'toilets',
    component: ToiletComponent,
    canActivate: [AuthGuard],
    children: [],
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard],
    children: [],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
