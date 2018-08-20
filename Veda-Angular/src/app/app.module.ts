import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NgMatModule } from './shared/modules/ngMaterial/ngMaterial.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    NgMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
