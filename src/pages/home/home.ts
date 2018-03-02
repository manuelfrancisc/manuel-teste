import { MoviesProvider } from './../../providers/movies/movies';
import { ProfilePage } from './../profile/profile';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { Http} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[
     MoviesProvider
  ]
})
export class HomePage  implements OnInit {
  
  searchterm: string;
 
  startAt = new Subject();
  endAt = new Subject();
 
  clubs;
  allclubs;
 
  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();
 
  data:String;
  constructor(public navCtrl: NavController,private afs: AngularFirestore, public http : Http) {
             
       }
    //Icone Link
   ProfilePage(){
       this.navCtrl.push(ProfilePage);
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
    this.manuel();
  }

    manuel(){
             this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=47bb1e079e91f4e1fe77c1494051f43b")
               .map(res=> res.json())
              .subscribe(data=>{ this.data = data.results; console.log(data.results)})
              ,error=>{console.log(error)}
       
    }
  

  search($event) {
    let q = $event.target.value;
    if (q != '') {
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }
    else {
      this.clubs = this.allclubs;
    }
  }
 
  firequery(start, end) {
    return this.afs.collection('epl', ref => ref.limit(4).orderBy('club').startAt(start).endAt(end)).valueChanges();
  }
 
  getallclubs() {
    return this.afs.collection('epl', ref => ref.orderBy('club')).valueChanges();
  }
  
}
