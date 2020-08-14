import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopRatedRoutingModule } from './top-rated-routing.module';
import { TopRatedComponent } from './top-rated.component';

@NgModule({
  declarations: [TopRatedComponent],
  imports: [CommonModule, TopRatedRoutingModule],
})
export class TopRatedModule {}
