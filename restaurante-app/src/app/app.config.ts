import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() =>
      initializeApp({
  apiKey: "AIzaSyDUy2QPZqHrfRoYntDGIYQk1XmYa1rMGbk",
  authDomain: "daa-ii-2025-7c7f9.firebaseapp.com",
  projectId: "daa-ii-2025-7c7f9",
  storageBucket: "daa-ii-2025-7c7f9.firebasestorage.app",
  messagingSenderId: "408638725521",
  appId: "1:408638725521:web:923c4541dab37473380e30",
  measurementId: "G-DRZJWB2KMW"
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),    
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(),
  ],
};
