import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsModule } from './core/shared/modules/components.module';
import { NewAppComponent } from './features/pages/new-app/new-app.component';
import { DomainsComponent } from './features/pages/domains/domains.component';
import { DatabasesComponent } from './features/pages/databases/databases.component';
import { MonitorComponent } from './features/pages/monitor/monitor.component';
import { SettingsComponent } from './features/pages/settings/settings.component';

@NgModule({
  declarations: [AppComponent, NewAppComponent, DomainsComponent, DatabasesComponent, MonitorComponent, SettingsComponent],
  imports: [BrowserModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
