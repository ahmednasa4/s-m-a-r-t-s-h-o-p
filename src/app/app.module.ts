import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriseProvider } from '../providers/categorise/categorise';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
           provide: TranslateLoader,
           useFactory: (createTranslateLoader),
           deps: [Http]
         }
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriseProvider
  ]
})
export class AppModule {
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
