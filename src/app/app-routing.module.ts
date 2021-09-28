import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './core/pages/apps/apps.component';
import { DashComponent } from './core/pages/dash/dash.component';
import { DatabasesComponent } from './core/pages/databases/databases.component';
import { DomainsComponent } from './core/pages/domains/domains.component';
import { MonitorComponent } from './core/pages/monitor/monitor.component';
import { NewAppComponent } from './core/pages/new-app/new-app.component';
import { SettingsComponent } from './core/pages/settings/settings.component';

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
