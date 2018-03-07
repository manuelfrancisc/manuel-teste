import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import  { firebase } from '@firebase/app';




@IonicPage()
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class HotelPage  implements OnInit{
  public countryList:Array<any>;
  public loadedCountryList:Array<any>;
  public countryRef;
  
  constructor( public db: AngularFireDatabase ) { 
    this.countryRef = firebase.database().ref('/User');
  
  }
  
  
  ngOnInit(){
    this.countryRef.on('value', countryList => {
      let countries = [];
      countryList.forEach( country => {
        countries.push(country.val());
        return false;
      });
    
      this.countryList = countries;
      this.loadedCountryList = countries;
    });
    
  }

  initializeItems(): void {
    this.countryList = this.loadedCountryList;
  }
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
  
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
  
    this.countryList = this.countryList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.countryList.length);
  
  }
}
