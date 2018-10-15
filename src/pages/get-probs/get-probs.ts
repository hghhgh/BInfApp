import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the GetProbsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-probs',
  templateUrl: 'get-probs.html',
})
export class GetProbsPage {

  id="";
  name = "";
  prob = 0.0;
  sliderValue= 0;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    console.log('name:', navParams.get('name'));
    this.id = navParams.get('id');
    this.name = navParams.get('name');
    let k = "hprob_"+this.id.split("_")[1];
    this.storage.get(k).then((nval) => {
      this.prob = nval;
      this.sliderValue = nval * 10000;
    });

  }

  ionViewDidLoad() {

  }

  dismiss() {
    let data = { name:this.name,prob: this.prob };
    this.viewCtrl.dismiss(data);
  }

  canclePage(){
    this.viewCtrl.dismiss()
  }

  updateProb(e: any) {
    this.prob = this.sliderValue/10000.0;
  }

  updateSlideBar() {
    this.sliderValue = this.prob*10000.0;
  }
}
