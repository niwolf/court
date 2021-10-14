import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlatzBelegungService } from '../../services/platz-belegung.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss'],
})
export class NewBookingComponent {
  constructor(
    public _snackBar: MatSnackBar,
    public belegungsService: PlatzBelegungService
  ) {}
}
