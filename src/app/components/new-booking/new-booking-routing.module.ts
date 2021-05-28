import { RouterModule, Routes } from '@angular/router';
import { NewBookingComponent } from './new-booking.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: NewBookingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewBookingRoutingModule {}
