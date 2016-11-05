import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationComponent } from './authentication.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms'; //for ngModel

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
    declarations: [AppComponent, AuthenticationComponent, DashboardComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
