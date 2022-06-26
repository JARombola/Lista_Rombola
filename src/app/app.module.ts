import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    AlumnosListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
