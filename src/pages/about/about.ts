import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
manuel:Observable<any>;
  constructor(public navCtrl: NavController, public db:AngularFireDatabase) {
                this.manuel=this.getAll();
                console.log(this.manuel)

  }



   getdata(){
    this.db.list('taquiclient').valueChanges();
  
   }




  getAll(){
    return this.db.list('/taquiclient')
    .snapshotChanges()
    .map(changes=>{
      return changes.map(c=>({
        key: c.payload.key, ...c.payload.val()
      }));
    })   
}

}
