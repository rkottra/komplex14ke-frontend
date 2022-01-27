import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PilotaComponent } from './pilota/pilota.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PilotakComponent } from './pilota/pilotak.component';
import { FormsModule } from '@angular/forms';
import { UjpilotaComponent } from './ujpilota/ujpilota.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotaComponent,
    PilotakComponent,
    UjpilotaComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
