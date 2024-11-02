import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

const firebaseConfig = {
  projectId: "weedingpage-angelajairo",
  appId: "1:32965849032:web:f4a14f71c360dc56361afd",
  storageBucket: "weedingpage-angelajairo.appspot.com",
  apiKey: "AIzaSyC2uZlXiiQWiXd0joFQgRcboKoDf-zGPr0",
  authDomain: "weedingpage-angelajairo.firebaseapp.com",
  messagingSenderId: "32965849032"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ]
};
