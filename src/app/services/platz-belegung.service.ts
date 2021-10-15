import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlatzBelegungService {
  public court1Belegt: boolean = false;
  public court2Belegt: boolean = false;
  public court3Belegt: boolean = false;

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
        this.court1Belegt = false;
        break;
      }
      case 2: {
        this.court1Belegt = true;
        break;
      }
    }
  }

  toggleCourt2(value: number): void {
    switch (value) {
      case 1: {
        this.court2Belegt = false;
        break;
      }
      case 2: {
        this.court2Belegt = true;
        break;
      }
    }
  }

  toggleCourt3(value: number): void {
    switch (value) {
      case 1: {
        this.court3Belegt = false;
        break;
      }
      case 2: {
        this.court3Belegt = true;
        break;
      }
    }
  }
}
