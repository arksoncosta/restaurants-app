import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {registerLocaleData} from '@angular/common';
import locale from '@angular/common/locales/pt';

registerLocaleData(locale, 'pt');

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [{provide: LOCALE_ID, useValue: 'pt'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
