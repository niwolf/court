import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import {
  Court,
  CourtOccupancyService,
} from '../../services/court-occupancy.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

const getObservable = (collection: AngularFirestoreCollection<Court>) => {
  const subject = new BehaviorSubject<Court[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((court: Court[]) => {
    subject.next(court);
  });
  return subject;
};

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
