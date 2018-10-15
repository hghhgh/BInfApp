import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {AddHypPage} from "../add-hyp/add-hyp";
import {SetConditionalPage} from "../set-conditional/set-conditional";
import {InferencePage} from "../inference/inference";
import {AddTestPage} from "../add-test/add-test";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalController: ModalController, private storage: Storage) {

    // Or to get a key/value pair
    this.storage.get('lastrun').then((val) => {
      console.log('last run: ', val);
    });
  }

  openNewVarPage() {
    let profileModal = this.modalController.create(AddHypPage);
    profileModal.onDidDismiss(data => {
      if (data == null){
        console.log('cancel !');
        return;
      }
    });
    profileModal.present();
  }

  openSetConditionalPage() {
    // let profileModal = this.modalController.create(SetConditionalPage);
    // profileModal.onDidDismiss(data => {
    //   if (data == null){
    //     console.log('cancel !');
    //     return;
    //   }
    // });
    // profileModal.present();
    this.navCtrl.push(AddTestPage);

  }

  openInferencePage() {
    // let profileModal = this.modalController.create(InferencePage);
    // profileModal.onDidDismiss(data => {
    //   if (data == null){
    //     console.log('cancel !');
    //     return;
    //   }
    // });
    // profileModal.present();
    this.navCtrl.push(InferencePage, {step:0});
  }
}
