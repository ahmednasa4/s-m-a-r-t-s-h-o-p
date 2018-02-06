import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(translate: TranslateService,public navCtrl: NavController) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('es');
  }

}
