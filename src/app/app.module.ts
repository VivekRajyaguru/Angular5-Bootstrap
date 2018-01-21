import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GrowlModule} from 'primeng/growl';
import { CustomHttpService } from './services/customHttp.service';
import { NotificationService } from './services/notification.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './components/error.component';
import { AppRoutingModule } from './app.routing';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    GrowlModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [CustomHttpService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
