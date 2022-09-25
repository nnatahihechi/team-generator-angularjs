import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { RemitaEmailTemplateComponent } from './remita-email-template/remita-email-template.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    RemitaEmailTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
