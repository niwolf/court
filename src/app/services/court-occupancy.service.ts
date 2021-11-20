import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';

export interface Court {
  id: number;
  name: string;
  occupied: boolean;
}

export const getObservable = (
  collection: AngularFirestoreCollection<Court>
) => {
  const subject = new BehaviorSubject<Court[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((court: Court[]) => {
    subject.next(court);
  });
  return subject;
};

@Injectable({ providedIn: 'root' })
export class CourtOccupancyService {
  constructor(private store: AngularFirestore) {}

  toggleHandling(court: string, courts: Court): any {
    switch (court) {
      case '1': {
        this.store
          .collection('courts')
          .doc('1')
          .update({ id: courts.id, name: 'Platz 1', occupied: courts.occupied })
          .then();
        break;
      }
      case '2': {
        this.store
          .collection('courts')
          .doc('2')
          .update({ id: courts.id, name: 'Platz 2', occupied: courts.occupied })
          .then();
        break;
      }
      case '3': {
        this.store
          .collection('courts')
          .doc('3')
          .update({ id: courts.id, name: 'Platz 3', occupied: courts.occupied })
          .then();
        break;
      }
    }
  }
}
