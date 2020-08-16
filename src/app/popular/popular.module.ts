import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PopularRoutingModule } from './popular-routing.module';
import { PopularComponent } from './popular.component';

@NgModule({
  declarations: [PopularComponent],
  imports: [CommonModule, PopularRoutingModule, SharedModule],
})
export class PopularModule {}
