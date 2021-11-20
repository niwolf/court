import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourtOccupancyService } from '../../services/court-occupancy.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getData } from '../../utils/getData';
import { Court } from '../../models/court';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss'],
})
export class NewBookingComponent {
  court = getData(this.store.collection('courts')) as Observable<Array<Court>>;

  constructor(
    public _snackBar: MatSnackBar,
    public courtOccupancyService: CourtOccupancyService,
    private store: AngularFirestore
  ) {}

  newBooking(court: string, courts: Court) {
    this.courtOccupancyService.toggleHandling(court, courts);
    this._snackBar.open('Platz ' + court + ' wurde soeben gebucht!', 'Ok', {
      duration: 3000,
    });
  }
}
