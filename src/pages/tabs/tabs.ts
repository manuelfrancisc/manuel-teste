import { FavoritePage } from './../favorite/favorite';
import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root =  ChatPage;
  tab5Root =  FavoritePage;
  constructor() {

  }
}
