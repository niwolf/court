import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlatzBelegungService {
  public court1Belegt: string = 'green';

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
}
