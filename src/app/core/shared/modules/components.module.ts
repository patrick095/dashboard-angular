import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeadComponent } from '../../components/head/head.component';
import { ChartCircleComponent } from '../../components/chart-circle/chart-circle.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [NavbarComponent, HeadComponent, ChartCircleComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    NavbarComponent,
    HeadComponent,
    ChartCircleComponent,
    AppRoutingModule,
  ],
})
export class ComponentsModule {}
