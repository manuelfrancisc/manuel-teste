import { firebase } from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhoneAuthPage } from '../phone-auth/phone-auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  PhoneAuthPage(){
       this.navCtrl.push(PhoneAuthPage);
  }



  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }
  
  signOut() {
    this.afAuth.auth.signOut();
  }


  signInWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => console.log(res));
  }
  

}
