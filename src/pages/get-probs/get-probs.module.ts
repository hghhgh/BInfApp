import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetProbsPage } from './get-probs';

@NgModule({
  declarations: [
    GetProbsPage,
  ],
  imports: [
    IonicPageModule.forChild(GetProbsPage),
  ],
})
export class GetProbsPageModule {}
