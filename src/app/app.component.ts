import { Component, ViewChild } from '@angular/core';
import {ModalController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {Storage} from "@ionic/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp();

    // this.storage.clear();
    // set a key/value
    this.storage.get('lastrun').then((val) => {
      if(val == null){
        this.storage.set('lasthypid', 1);
        this.storage.set('lasttestid', 1);
        this.storage.set('lastrun', new Date().getDate());
      }
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'صفحه نخست', component: HomePage },
      { title: 'تمام متغیرها', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
