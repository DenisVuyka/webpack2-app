import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebpackLibModule } from 'webpack2-lib';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        WebpackLibModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
