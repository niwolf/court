import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface Court {
  id: number;
  name: string;
  occupied: boolean;
}

@Injectable({ providedIn: 'root' })
export class CourtOccupancyService {
  public court1IsOccupied: boolean = false;
  public court2IsOccupied: boolean = false;
  public court3IsOccupied: boolean = false;

  constructor(private store: AngularFirestore) {}

  toggleHandling(court: string, courts: Court): any {
    switch (court) {
      case '1': {
        this.store.collection('courts').doc('1').update(courts).then();
        this.court1IsOccupied = true;
        break;
      }
      case '2': {
        this.store.collection('courts').doc('2').update(courts).then();
        this.court2IsOccupied = true;
        break;
      }
      case '3': {
        this.store.collection('courts').doc('3').update(courts).then();
        this.court3IsOccupied = true;
        break;
      }
    }
  }

  // toggleCourt1(court: Court): void {
  //   switch (value) {
  //     case 1: {
  //       // new Court: Court = {id: 1, name: 'court1', occupied: false };
  //       // this.court1IsOccupied = false;
  //       this.store.collection('courts').doc(court.name).update(court);
  //       break;
  //     }
  //     case 2: {
  //       this.court1IsOccupied = true;
  //       break;
  //     }
  //   }
  // }
  //
  // toggleCourt2(value: number): void {
  //   switch (value) {
  //     case 1: {
  //       this.court2IsOccupied = false;
  //       break;
  //     }
  //     case 2: {
  //       this.court2IsOccupied = true;
  //       break;
  //     }
  //   }
  // }
  //
  // toggleCourt3(value: number): void {
  //   switch (value) {
  //     case 1: {
  //       this.court3IsOccupied = false;
  //       break;
  //     }
  //     case 2: {
  //       this.court3IsOccupied = true;
  //       break;
  //     }
  //   }
  // }
}
