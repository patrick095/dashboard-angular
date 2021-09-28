import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsModule } from './core/shared/modules/components.module';
import { NewAppComponent } from './core/pages/new-app/new-app.component';
import { DomainsComponent } from './core/pages/domains/domains.component';
import { DatabasesComponent } from './core/pages/databases/databases.component';
import { MonitorComponent } from './core/pages/monitor/monitor.component';
import { SettingsComponent } from './core/pages/settings/settings.component';

@NgModule({
  declarations: [AppComponent, NewAppComponent, DomainsComponent, DatabasesComponent, MonitorComponent, SettingsComponent],
  imports: [BrowserModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
