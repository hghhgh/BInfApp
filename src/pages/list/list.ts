import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{key: string, title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];

    this.storage.keys().then((val) => {
      // console.log('keys ', val);
      val.forEach(k => {
        // console.log('k', k);
        // console.log('k.indexOf(\'name\')', k.indexOf('name'));

        // if(k.indexOf('name') >= 0)
        {
          this.storage.get(k).then((nval) => {
            // console.log('nval', nval);
            // var pk = k.split('_')[1];
            this.items.push({
              key: k,
              title: nval,
              icon:this.icons[Math.floor(Math.random() * this.icons.length)]
            });
          });
        }

      });
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  clearAllData() {
    this.storage.clear();
  }
}
