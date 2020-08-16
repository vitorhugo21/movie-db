import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UpcomingRoutingModule } from './upcoming-routing.module';
import { UpcomingComponent } from './upcoming.component';

@NgModule({
  declarations: [UpcomingComponent],
  imports: [CommonModule, UpcomingRoutingModule, SharedModule],
})
export class UpcomingModule {}
