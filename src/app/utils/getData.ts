import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { Court } from '../models/court';

export const getData = (collection: AngularFirestoreCollection<Court>) => {
  const subject = new BehaviorSubject<Court[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((court: Court[]) => {
    subject.next(court);
  });
  return subject;
};
