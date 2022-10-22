import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AsidemenuComponent } from './layout/asidemenu/asidemenu.component';
import { ComplainsComponent } from './complains/complains.component';
import { NotificationsComponent } from './notifications/notifications.component';

/* PRIME NG */
import {AccordionModule} from 'primeng/accordion';   
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AsidemenuComponent,
    ComplainsComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    FileUploadModule,
    HttpClientModule
  ],
  exports: [
   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
