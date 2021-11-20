import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationModule } from './navigation/navigation.module';
import { NewBookingModule } from './components/new-booking/new-booking.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';

registerLocaleData(localeDe);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationModule,
    NewBookingModule,
    DashboardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
