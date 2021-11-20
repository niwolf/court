import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  Court,
  CourtOccupancyService,
} from '../../services/court-occupancy.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss'],
})
export class NewBookingComponent {
  constructor(
    public _snackBar: MatSnackBar,
    public courtOccupancyService: CourtOccupancyService
  ) {}

  newBooking(court: string, courts: Court) {
    this.courtOccupancyService.toggleHandling(court, courts);
    this._snackBar.open('Platz ' + court + ' wurde soeben gebucht!', 'Ok', {
      duration: 3000,
    });
  }
}
