import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CourtOccupancyService {
  public court1IsOccupied: boolean = false;
  public court2IsOccupied: boolean = false;
  public court3IsOccupied: boolean = false;

  toggleHandling(court: string): any {
    switch (court) {
      case '1': {
        this.toggleCourt1(2);
        break;
      }
      case '2': {
        this.toggleCourt2(2);
        break;
      }
      case '3': {
        this.toggleCourt3(2);
        break;
      }
    }
  }

  toggleCourt1(value: number): void {
    switch (value) {
      case 1: {
        this.court1IsOccupied = false;
        break;
      }
      case 2: {
        this.court1IsOccupied = true;
        break;
      }
    }
  }

  toggleCourt2(value: number): void {
    switch (value) {
      case 1: {
        this.court2IsOccupied = false;
        break;
      }
      case 2: {
        this.court2IsOccupied = true;
        break;
      }
    }
  }

  toggleCourt3(value: number): void {
    switch (value) {
      case 1: {
        this.court3IsOccupied = false;
        break;
      }
      case 2: {
        this.court3IsOccupied = true;
        break;
      }
    }
  }
}
