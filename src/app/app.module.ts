import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {GetProbsPage} from "../pages/get-probs/get-probs";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IonicStorageModule} from "@ionic/storage";
import {AddHypPage} from "../pages/add-hyp/add-hyp";
import {SetConditionalPage} from "../pages/set-conditional/set-conditional";
import {InferencePage} from "../pages/inference/inference";
import {AddTestPage} from "../pages/add-test/add-test";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GetProbsPage,
    AddHypPage,
    SetConditionalPage,
    InferencePage,
    AddTestPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GetProbsPage,
    AddHypPage,
    SetConditionalPage,
    InferencePage,
    AddTestPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {
}
