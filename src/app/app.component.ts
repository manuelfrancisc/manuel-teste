//import { HotelPage } from './../pages/hotel/hotel';
//import { NaturePage } from './../pages/nature/nature';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { TabsPage } from '../pages/tabs/tabs';
//import { SlidePage } from '../pages/slide/slide';
import { ProfilePage } from '../pages/profile/profile';
//import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
rootPage= ProfilePage; 
 

user;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afth : AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // this.user = this.afth.auth.currentUser;
     //console.log("here",this.user);
    
  }
}
