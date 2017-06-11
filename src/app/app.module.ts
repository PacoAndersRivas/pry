import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module'

// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2'

// providers
import { AuthService } from '../providers/auth-service'
import { DataService } from '../providers/data-service'
import { Util } from '../providers/util'

export const firebaseConfig = {
    apiKey: "AIzaSyCzKPSbhL9ZoXcfcOviq6jYrWFzJA8FxLs",
    authDomain: "prydatabase-c1b9f.firebaseapp.com",
    databaseURL: "https://prydatabase-c1b9f.firebaseio.com",
    projectId: "prydatabase-c1b9f",
    storageBucket: "prydatabase-c1b9f.appspot.com",
    messagingSenderId: "640471884580"

}
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    AuthService,
    DataService,
    Util,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
