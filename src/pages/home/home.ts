import { AboutPage } from './..//about/about';
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
  data2:String;
  constructor(public navCtrl: NavController,private afs: AngularFirestore, public http : Http){}
    
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

    this.ml();
  }
 

  //Json
    ml(){
      this.http.get("http://fc66e15e.ngrok.io/wp-json/wp/v2/posts/")
        .map(res=> res.json())
       .subscribe(data=>{ this.data2 = data; console.log(data)})
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
  

  //Navigating-Routes  (Pages)
  HotelPage(){this.navCtrl.push(AboutPage,{manuel :"Hotel"});}
  ActivityPage(){this.navCtrl.push(AboutPage,{manuel :"Actividade"});}
  NaturePage(){this.navCtrl.push(AboutPage,{manuel :"Natureza"});}
  BeachPage(){this.navCtrl.push(AboutPage,{manuel :"Praia"});}
  RestaurantePage(){this.navCtrl.push(AboutPage,{manuel :"Restaurante"});}

}
