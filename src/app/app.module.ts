
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http'

import { ProfilePage } from './../pages/profile/profile';
import { FavoritePage } from './../pages/favorite/favorite';
import { ChatPage } from './../pages/chat/chat';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {  AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SlidePage } from '../pages/slide/slide';
import { PhoneAuthPage } from '../pages/phone-auth/phone-auth';
import { CompanyPage } from '../pages/company/company';
import { MoviesProvider } from '../providers/movies/movies';


export const config = {
  apiKey: "AIzaSyBxI01J-YRPJ9PUkyqldW_JX9ig7fcTxX0",
  authDomain: "taquiclient.firebaseapp.com",
  databaseURL: "https://taquiclient.firebaseio.com",
  projectId: "taquiclient",
  storageBucket: "taquiclient.appspot.com",
  messagingSenderId: "797680672567"};



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SlidePage,
    SignupPage,
    PhoneAuthPage,
    LoginPage,
    ChatPage,
    FavoritePage,
    ProfilePage,
    CompanyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SlidePage,
    SignupPage,
    PhoneAuthPage,
    LoginPage,
    ChatPage,
    FavoritePage,
    ProfilePage,
    CompanyPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider
  ]
})
export class AppModule {}
