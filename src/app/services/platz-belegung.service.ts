import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlatzBelegungService {
  public court1Belegt: string = 'green';
  public court2Belegt: string = 'green';
  public court3Belegt: string = 'green';

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

  toggleCourt1(value: number): string {
    switch (value) {
      case 1: {
        return (this.court1Belegt = 'green');
      }
      case 2: {
        return (this.court1Belegt = 'red');
      }
      default: {
        return (this.court1Belegt = 'blue');
      }
    }
  }

  toggleCourt2(value: number): string {
    switch (value) {
      case 1: {
        return (this.court2Belegt = 'green');
      }
      case 2: {
        return (this.court2Belegt = 'red');
      }
      default: {
        return (this.court2Belegt = 'blue');
      }
    }
  }

  toggleCourt3(value: number): string {
    switch (value) {
      case 1: {
        return (this.court3Belegt = 'green');
      }
      case 2: {
        return (this.court3Belegt = 'red');
      }
      default: {
        return (this.court3Belegt = 'blue');
      }
    }
  }
}
