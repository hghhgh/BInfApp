import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InferencePage } from './inference';

@NgModule({
  declarations: [
    InferencePage,
  ],
  imports: [
    IonicPageModule.forChild(InferencePage),
  ],
})
export class InferencePageModule {}
