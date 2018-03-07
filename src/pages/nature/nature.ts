import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as instantsearch from 'instantsearch.js';
import { environment } from '../enviroment';
//import instantsearch from 'instantsearch.js';
import { searchBox } from 'instantsearch.js/es/widgets'; 

declare var instantsearch: any;

 
@IonicPage()
@Component({
  selector: 'page-nature',
  templateUrl: 'nature.html',
})
export class NaturePage  {
  
  search;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    console.log(environment.algolia);
    console.log(instantsearch)
    this.search = instantsearch(environment.algolia);
    // search box widget
    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        autofocus: false,
        placeholder: 'Search for actors',
        poweredBy: true
      })
    );

    // initialize hits widget
    this.search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          empty: 'No results',
          item: `<img src=https://image.tmdb.org/t/p/w300{{image_path}} width="50px">
                <strong>Result {{objectID}}</strong>:
                {{{_highlightResult.name.value}}}`
        },
        escapeHits: true
      })
    );

    this.search.addWidget(
      instantsearch.widgets.stats({
        container: '#stats'
      })
    );

    this.search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination',
        maxPages: 20,
      })
    );

    this.search.addWidget(
      instantsearch.widgets.analytics({
        pushFunction: (query, state, results) => {
          console.log(query)
          console.log(state)
          console.log(results)
        }
      })
    );

    this.search.start();
  }
  
}