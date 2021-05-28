import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'navigation',
  },
  {
    path: 'navigation',
    loadChildren: () =>
      import('./navigation/navigation.module').then((m) => m.NavigationModule),
  },
  {
    path: 'new-booking',
    loadChildren: () =>
      import('./new-booking/new-booking.module').then(
        (m) => m.NewBookingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
