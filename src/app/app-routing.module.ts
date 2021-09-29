import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './features/pages/apps/apps.component';
import { DashComponent } from './features/pages/dash/dash.component';
import { DatabasesComponent } from './features/pages/databases/databases.component';
import { DomainsComponent } from './features/pages/domains/domains.component';
import { MonitorComponent } from './features/pages/monitor/monitor.component';
import { NewAppComponent } from './features/pages/new-app/new-app.component';
import { SettingsComponent } from './features/pages/settings/settings.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'new-app', component: NewAppComponent },
  { path: 'domains', component: DomainsComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'databases', component: DatabasesComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
