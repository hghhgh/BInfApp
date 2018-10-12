import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {GetProbsPage} from "../get-probs/get-probs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalController: ModalController) {

  }

  openNewVarPage() {
    let profileModal = this.modalController.create(GetProbsPage, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }

}
