import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookingComponent } from './new-booking.component';
import { NewBookingRoutingModule } from './new-booking-routing.module';

@NgModule({
  declarations: [NewBookingComponent],
  imports: [CommonModule, NewBookingRoutingModule],
})
export class NewBookingModule {}
