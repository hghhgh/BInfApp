import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the SetConditionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-conditional',
  templateUrl: 'set-conditional.html',
})
export class SetConditionalPage {

  firstItem: any;
  secondItem: any;
  items: Array<{ id: string, title: string }>;
  P_Tp_Hp = 0.0;
  P_Tn_Hn = 0.0;
  sliderValueP_Tp_Hp = 0;
  sliderValueP_Tn_Hn = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // If we navigated to this page, we will have an item available as a nav param
    this.firstItem = navParams.get('firstitem'); // this is the Hypothesis
    this.secondItem = navParams.get('seconditem'); // it is the Test
    this.items = [];

    this.storage.keys().then((val) => {
      val.forEach(k => {
        if (k.indexOf('hname') == 0) {
          this.storage.get(k).then((nval) => {
            this.items.push({id: k, title: nval});
          });
        }
      });
    });

    if (this.firstItem && this.secondItem) {
      let keyP_Ep_Hp = 'P-Tp-Hp_' + this.secondItem.id.split('_')[1] + '_' + this.firstItem.id.split('_')[1];
      this.storage.get('cprob_' + keyP_Ep_Hp).then((val) => {
        // if(val) {
        this.P_Tp_Hp = val;
        this.sliderValueP_Tp_Hp = val * 1000;
        // }
      });
      let keyP_En_Hn = 'P-Tn-Hn_' + this.secondItem.id.split('_')[1] + '_' + this.firstItem.id.split('_')[1];
      this.storage.get('cprob_' + keyP_En_Hn).then((val) => {
        // if(val) {
        this.P_Tn_Hn = val;
        this.sliderValueP_Tn_Hn = val * 1000;
        // }
      });
    }
  }

  itemTapped(event, item) {
    console.log('first ', this.firstItem);
    console.log('second ', this.secondItem);

    if (!this.firstItem) {
      // That's right, we're pushing to ourselves!
      this.navCtrl.push(SetConditionalPage, {
        firstitem: item,
        seconditem: this.secondItem,
      });
    }
  }

  updateP_Tp_Hp(e: any) {
    this.P_Tp_Hp = this.sliderValueP_Tp_Hp / 1000.0;
  }

  updateP_Tn_Hn() {
    this.P_Tn_Hn = this.sliderValueP_Tn_Hn / 1000.0;
  }

  saveAndReturn() {
    let keyP_Ep_Hp = 'P-Tp-Hp_' + this.secondItem.id.split('_')[1] + '_' + this.firstItem.id.split('_')[1];
    let nameP_Ep_Hp = 'P-Tp-Hp_' + '_' + this.secondItem.title + '_' + this.firstItem.title;
    this.storage.set('cname_' + keyP_Ep_Hp, nameP_Ep_Hp);
    this.storage.set('cprob_' + keyP_Ep_Hp, this.P_Tp_Hp);

    let keyP_En_Hn = 'P-Tn-Hn_' + this.secondItem.id.split('_')[1] + '_' + this.firstItem.id.split('_')[1];
    let nameP_En_Hn = 'P-Tn-Hn_' + '_' + this.secondItem.title + '_' + this.firstItem.title;
    this.storage.set('cname_' + keyP_En_Hn, nameP_En_Hn);
    this.storage.set('cprob_' + keyP_En_Hn, this.P_Tn_Hn);

    this.navCtrl.pop();
  }

  updateSliderP_Tn_Hn() {
    this.sliderValueP_Tn_Hn = this.P_Tn_Hn * 1000.0;
  }

  updateSliderP_Tp_Hp() {
    this.sliderValueP_Tp_Hp = this.P_Tp_Hp * 1000.0;
  }
}
