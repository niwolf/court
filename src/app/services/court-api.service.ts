import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import Item = firebase.analytics.Item;
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, doc, getDocs, updateDoc } from '@angular/fire/firestore';
const firebaseApp = initializeApp({
  // apiKey: '### FIREBASE API KEY ###',
  authDomain: 'court-390a2.firebaseapp.com',
  projectId: 'court-390a2'
});

const db = getFirestore();
// const querySnapshot = await getDocs(collection(db, "courts"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

@Injectable({
  providedIn: 'root',
})
export class CourtApiService {
  constructor(private afs: AngularFirestore) {}

  // public getItems(): Observable<Item[]> {
  //   return this.getItemCollection().valueChanges();
  // }

  public async update(id: string): Promise<void> {
    const courts = doc(db, "courts", id);
    await updateDoc(courts, {
      Occupied: true
    });
  }

  // public addItem(courtId): Promise<DocumentReference> {
    // return this..getItemCollection().add();
    // return this.afs.collection<Item>(`courts/${courtId}`)
  // }

  // private getItemCollection(
  // ): AngularFirestoreCollection<Item> {
  //     // return this.afs.collection<Item>(`users/${userId}/items`);
  // }
}
