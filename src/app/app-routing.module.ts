import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './core/pages/apps/apps.component';
import { DashComponent } from './core/pages/dash/dash.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'apps', component: AppsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
