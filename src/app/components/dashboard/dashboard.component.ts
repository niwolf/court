import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { CourtOccupancyService } from '../../services/court-occupancy.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getData } from '../../utils/getData';
import { Court } from '../../models/court';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  court = getData(this.store.collection('courts')) as Observable<Court[]>;

  alleBelegt: boolean | undefined;

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

  public ngOnInit(): void {
    this.court.subscribe((court: Array<Court>) => {
      court.every((c) =>
        c.occupied ? (this.alleBelegt = true) : (this.alleBelegt = false)
      );
    });
  }
}
