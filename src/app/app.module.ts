import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ComptesComponent } from './comptes/comptes.component';
import { CompteCreateComponent } from './comptes/compte-create/compte-create.component';
import { CompteListComponent } from './comptes/compte-list/compte-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComptesComponent,
    CompteCreateComponent,
    CompteListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
