import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookingComponent } from './new-booking.component';
import { NewBookingRoutingModule } from './new-booking-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewBookingComponent],
  imports: [
    CommonModule,
    NewBookingRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
})
export class NewBookingModule {}
