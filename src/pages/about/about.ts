import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  manuel:Observable<any>;//change name
  teste;//change name
 
  

  searchterm: string; 
  startAt = new Subject();
  endAt = new Subject();
  clubs;
  allclubs;
  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

 
  constructor(public navCtrl: NavController, public db:AngularFireDatabase, public nabp: NavParams,private afs: AngularFirestore) {
                this.manuel=this.getAll();
                this.teste= this.nabp.get("manuel");
                console.log(this.teste);
                console.log(this.manuel);



  }

 getAll(){
   return this.db.list('User')
    .snapshotChanges()
     .map(changes=>{
      return changes.map(c=>({
        key: c.payload.key, ...c.payload.val()
      }));
    })   
}



ngOnInit() {
  this.getallclubs().subscribe((clubs) => {
    this.allclubs = clubs;
  })
  Observable.combineLatest(this.startobs, this.endobs).subscribe((value) => {
    this.firequery(value[0], value[1]).subscribe((clubs) => {
      this.clubs = clubs;
    })
  })
}

/* getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  } */



search($event) {
  let q = $event.target.value;
  if (q && q.trim()!= '') {
    this.startAt.next(q);
    this.endAt.next(q + "\uf8ff");
    this.clubs= this.clubs.filter((item) => {
      return (item.toLowerCase().indexOf(q.toLowerCase()) > -1);
    })

  }
  else {
    this.clubs = this.allclubs;
  }
}

firequery(start, end) {
  if(this.teste=="Hotel"){this.afs.collection('Hotel', ref => ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();}
  if(this.teste=="Natureza"){this.afs.collection('natureza', ref => ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();}
  if(this.teste=="Actividade"){this.afs.collection('actividade', ref => ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();}
  if(this.teste=="Praia"){this.afs.collection('praia', ref => ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();}
  if(this.teste=="Restaurante"){this.afs.collection('restaurante', ref => ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();} 
      else { return this.afs.collection('epl', ref => ref.limit(4).orderBy('club').startAt(start).endAt(end)).valueChanges();}
 }

getallclubs() {
  if(this.teste=="Hotel"){  return this.afs.collection('Hotel', ref => ref.orderBy('name')).valueChanges();}
  if(this.teste=="Natureza"){  return this.afs.collection('natureza', ref => ref.orderBy('name')).valueChanges();}
  if(this.teste=="Actividade"){  return this.afs.collection('actividade', ref => ref.orderBy('name')).valueChanges();}
  if(this.teste=="Praia"){  return this.afs.collection('praia', ref => ref.orderBy('name')).valueChanges();}
  if(this.teste=="Restaurante"){  return this.afs.collection('restaurante', ref => ref.orderBy('name')).valueChanges();}
  else {return this.afs.collection('epl', ref => ref.orderBy('club')).valueChanges();}
}

}
