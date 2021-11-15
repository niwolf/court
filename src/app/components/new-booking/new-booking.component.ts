import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourtOccupancyService } from '../../services/court-occupancy.service';
import { CourtApiService } from '../../services/court-api.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss'],
})
export class NewBookingComponent {
  public id: string = '1';
  constructor(
    public _snackBar: MatSnackBar,
    public courtOccupancyService: CourtOccupancyService,
    private apiService: CourtApiService
  ) {}

  public async newBooking(court: string): Promise<void> {
    // let id: string;
    switch (court) {
      case '1': {
        this.id = 'qtEipb2pT0xlWmcW0GSt';
        break;
      }
      case '2': {
        this.id = 'FwPWRUPKpp8x8BelP92J';
        break;
      }
      case '3': {
        this.id = 'oAVGqalTtO3NhGE6Yqlo';
        break;
      }
    }

    // this.courtOccupancyService.toggleHandling(court);
    await this.apiService.update(this.id);
    this._snackBar.open('Platz ' + court + ' wurde soeben gebucht!', 'Ok', {
      duration: 3000,
    });
  }
}
