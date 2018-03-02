import { TabsPage } from './../tabs/tabs';
import { AngularFireDatabase } from 'angularfire2/database';
import { firebase } from '@firebase/app';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneAuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-auth',
  templateUrl: 'phone-auth.html',
})


export class PhoneAuthPage {
   
  displayName;
  Senha;

   octavio=0;
   PhoneNumber:string;
   code;
   verificationCode:string;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneAuthPage');
  }

LoginPage(){

      this.navCtrl.push(LoginPage);
}


SendCode(){
  var applicationVerifier = new firebase.auth.RecaptchaVerifier(
    'sign-in-button', {'size':'invisible'});
var provider = new firebase.auth.PhoneAuthProvider();
provider.verifyPhoneNumber('+244'+this.PhoneNumber, applicationVerifier).then(data=>{
        this.verificationCode= data;
        this.octavio=1;
        console.log(data);})}
  
Resendcode(){
  var credencial= firebase.auth.PhoneAuthProvider.credential(this.verificationCode,
          this.code);
    firebase.auth().signInWithCredential(credencial).then(data=>{
      this.octavio=2;console.log(data);})}

          
          
          UserPassWord(){     
          this.db.list('User').push({id:this.PhoneNumber,name:this.displayName,senha:this.Senha})
            .then(data=>{
      
                this.navCtrl.push(TabsPage)
                console.log(data);
            });
}

   BackButton(){
          this.navCtrl.pop();
   }

}
