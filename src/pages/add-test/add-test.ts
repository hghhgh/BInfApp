import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {GetProbsPage} from "../get-probs/get-probs";
import {SetConditionalPage} from "../set-conditional/set-conditional";

/**
 * Generated class for the AddTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-test',
  templateUrl: 'add-test.html',
})
export class AddTestPage {

  AllNames = [];
  FilteredNames = [];
  filtStr = '';

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, private storage: Storage) {
    this.loadAllVars();

  }

  private loadAllVars() {
    this.AllNames = [];
    this.FilteredNames = [];
    this.storage.keys().then((val) => {
      val.forEach(k => {
        if (k.indexOf('tname') == 0) {
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
    this.navCtrl.push(SetConditionalPage, {
      seconditem: {
        id: item.id,
        title: item.name,
      }
    });
  }


  canclePage() {
    this.viewCtrl.dismiss();
  }

  addNewTest() {
    if (this.filtStr == '') return;
    this.storage.get('lasttestid').then((val) => {
      var id = val + 1;
      this.storage.set('tname_' + id, this.filtStr);
      this.storage.set('lasttestid', id);
      this.loadAllVars();
      this.filtStr = '';
    });
  }
}
