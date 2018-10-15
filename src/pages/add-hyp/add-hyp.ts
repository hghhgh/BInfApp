import {Component} from '@angular/core';
import {IonicPage, ModalController, ViewController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {GetProbsPage} from "../get-probs/get-probs";

/**
 * Generated class for the AddHypPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-hyp',
  templateUrl: 'add-hyp.html',
})
export class AddHypPage {

  AllNames = [];
  FilteredNames = [];
  filtStr = '';

  constructor(public viewCtrl: ViewController, public modalController: ModalController, private storage: Storage) {
    this.loadAllHyps();

  }

  private loadAllHyps() {
    this.AllNames=[];
    this.FilteredNames=[];
    this.storage.keys().then((val) => {
      val.forEach(k => {
        if (k.indexOf('hname') == 0) {
          this.storage.get(k).then((nval) => {
            // console.log(k);
            this.AllNames.push({id: k, 'name': nval});
            this.FilteredNames.push({id: k, 'name': nval});
          });
        }
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHypPage');
  }

  filterList() {
    // console.log('fil', this.filtStr);
    let sf = this.filtStr;
    this.FilteredNames = this.AllNames.filter(v => {
      // console.log('v', v['name'].toString());
      if (v['name'].toString().indexOf(sf) !== -1) return true;
    });
    // console.log(this.FilteredNames);
  }

  itemSelected(item: any) {
    // console.log(item);
    // return;
    let profileModal = this.modalController.create(GetProbsPage, {id: item.id, name: item.name});
    profileModal.onDidDismiss(data => {
      if (data == null) {
        console.log('cancel !');
        return;
      }
      let id = item.id.split("_")[1];
      this.storage.set('hprob_' + id, data.prob);
      console.log(data.prob);
    });
    profileModal.present();
  }


  canclePage() {
    this.viewCtrl.dismiss();
  }

  addNewHyp() {
    if (this.filtStr == '') return;
    this.storage.get('lasthypid').then((val) => {
      var id = val + 1;
      this.storage.set('hname_' + id, this.filtStr);
      this.storage.set('lasthypid', id);
      this.loadAllHyps();
      this.filtStr = '';
    });
  }
}
