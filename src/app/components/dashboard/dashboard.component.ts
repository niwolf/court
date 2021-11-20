import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import {
  Court,
  CourtOccupancyService,
  getObservable,
} from '../../services/court-occupancy.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  court = getObservable(this.store.collection('courts')) as Observable<Court[]>;

  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    public courtOccupancyService: CourtOccupancyService,
    private breakpointObserver: BreakpointObserver,
    private store: AngularFirestore
  ) {}
}
