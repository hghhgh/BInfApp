import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTestPage } from './add-test';

@NgModule({
  declarations: [
    AddTestPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTestPage),
  ],
})
export class AddTestPageModule {}
