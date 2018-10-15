import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the InferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inference',
  templateUrl: 'inference.html',
})
export class InferencePage {

  firstItem: any;
  secondItem: any;
  step = 0;
  Hitems: Array<{ id: string, title: string, prob: string }>;
  FHitems: Array<{ id: string, title: string, prob: string }>;
  Titems: Array<{ id: string, title: string }>;
  FTitems: Array<{ id: string, title: string }>;
  filtStr = '';
  P_Hp_Tp = 0.0;
  newprior = -1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // If we navigated to this page, we will have an item available as a nav param
    this.step = navParams.get('step');
    console.log('step: ', this.step);
    this.firstItem = navParams.get('firstitem'); // Hypothesis
    this.secondItem = navParams.get('seconditem'); // Test
    this.newprior = navParams.get('newprior');
    this.Hitems = [];
    this.FHitems = [];
    this.Titems = [];
    this.FTitems = [];

    this.storage.keys().then((val) => {
      val.forEach(k => {
        if (k.indexOf('hname') == 0) {
          this.storage.get(k).then((nval) => {
            var pk = k.replace('hname_', 'hprob_');
            // console.log(pk);
            this.storage.get(pk).then((pval) => {
              this.Hitems.push({id: k, title: nval, prob: pval});
              this.FHitems.push({id: k, title: nval, prob: pval});
            });
          });
        }
        if (k.indexOf('tname') == 0) {
          var pk = k.replace('hname_', 'tname_');
          this.storage.get(pk).then((nval) => {
            this.Titems.push({id: k, title: nval});
            this.FTitems.push({id: k, title: nval});
          });
        }
      });
    });

    if (this.step > 1) {
      let keyP_Ep_Hp = 'P-Tp-Hp_' + this.secondItem.id.split('_')[1] + '_' + this.firstItem.id.split('_')[1];
      console.log('keyP_Ep_Hp: ', keyP_Ep_Hp);
      this.storage.get('cprob_' + keyP_Ep_Hp).then((P_Ep_Hp) => {
        if (P_Ep_Hp) {
          let keyP_En_Hn = 'P-Tn-Hn_' + this.secondItem.id.split('_')[1] + '_' + this.firstItem.id.split('_')[1];
          console.log('keyP_En_Hn: ', keyP_En_Hn);
          this.storage.get('cprob_' + keyP_En_Hn).then((P_En_Hn) => {
            if (P_En_Hn) {
              // console.log(this.newprior);
              if (!this.newprior || this.newprior < 0) {
                this.storage.get('hprob_' + this.firstItem.id.split('_')[1]).then((P_Hp) => {
                  // console.log('P_Hp',P_Hp);
                  // console.log('P_Ep_Hp',P_Ep_Hp);
                  // console.log('P_En_Hn',P_En_Hn);
                  let prs = this.findProbabilities(P_Hp, P_Ep_Hp, P_En_Hn);
                  // console.log(prs);
                  this.P_Hp_Tp = this.inferBayesian(prs);
                });
              }
              else {
                let prs = this.findProbabilities(this.newprior, P_Ep_Hp, P_En_Hn);
                this.P_Hp_Tp = this.inferBayesian(prs);
              }
            }
            else {
              console.log('no P_Tn_Hn');
            }
          });
        }
        else {
          console.log('no P_Tp_Hp');
        }
      });
    }
  }

  itemTapped(event, item) {
    if (this.step == 0) {
      // That's right, we're pushing to ourselves!
      this.navCtrl.push(InferencePage, {
        seconditem: item,
        step: this.step + 1,
      });
    }
    else if (this.step == 1) {
      this.navCtrl.push(InferencePage, {
        firstitem: this.secondItem,
        seconditem: item,
        step: this.step + 1,
      });
    }
    else if (this.step > 1) {
      this.navCtrl.push(InferencePage, {
        seconditem: item,
        firstitem: this.firstItem,
        step: this.step + 1,
        newprior: this.P_Hp_Tp,
      });
    }
  }

  filterList(type: string) {
    let sf = this.filtStr;
    if (type == 'H') {
      this.FHitems = this.Hitems.filter(v => {
        if (v.title.indexOf(sf) !== -1) return true;
      });
    }
    else if (type == 'T') {
      this.FTitems = this.Titems.filter(v => {
        // console.log('v', v['name'].toString());
        if (v.title.indexOf(sf) !== -1) return true;
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InferencePage');
  }

  /**
   * Baysian inference functions
   * target is P(Hypothesis | Evidence) = P(H and E) / P(E)
   * H+(or Hp) means the target is sick
   * H-(or Hn) means the target is healthy
   * E+(or Ep) means the Evidence is occured
   * E-(or En) means the Evidence isn't occured
   *
   * P_Hp = .0; // from our knowledge or litrature
   * P_Ep_Hp = .0; // from specification of the test that provides the evidence
   * P_En_Hn = .0; // from specification of the test that provides the evidence
   */
  findProbabilities(P_Hp, P_Ep_Hp, P_En_Hn) {
    //  if P(H+)
    //  P_Hp
    //  P_Ep_Hp
    let P_En_Hp = 1 - P_Ep_Hp;

    // if P(H-)
    let P_Hn = 1.0 - P_Hp;
    //  P_Tn_Hn
    let P_Ep_Hn = 1 - P_En_Hn;

    let res = {
      P_Hp: P_Hp,
      P_Ep_Hp: P_Ep_Hp,
      P_En_Hp: P_En_Hp,
      P_Hn: P_Hn,
      P_Ep_Hn: P_Ep_Hn,
      P_En_Hn: P_En_Hn
    };

    return res;

  }

  /**
   * Infer based on Bayes rule
   *
   * return : the probability of being sick given positive evidence
   */
  inferBayesian(probs) {
    let P_HpEp = probs.P_Hp * probs.P_Ep_Hp;
    let P_HnEp = probs.P_Hn * probs.P_Ep_Hn;

    let denom = P_HpEp + P_HnEp;

    console.log('P_HpEp', P_HpEp);
    console.log('P_HnEp', P_HnEp);
    console.log('denom', denom);
    // P_Hp_Ep
    return P_HpEp / denom;
  }

}
