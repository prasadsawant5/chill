import { DatabaseService } from './database.service';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAekVT3q5G4hJcyIygti5_KyAdsad5n4_I',
  authDomain: 'chill-a2209.firebaseapp.com',
  databaseURL: 'https://chill-a2209.firebaseio.com',
  projectId: 'chill-a2209',
  storageBucket: '',
  messagingSenderId: '751062174417'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, 'chill'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
