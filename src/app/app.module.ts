import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeModule } from './_prime/prime.module';
import { NavComponent } from './nav/nav.component';
import { HomeModule } from './home/home.module';
import { BloggersModule } from './bloggers/bloggers.module';
import { AddModule } from './add/add.module';
import { NotificationsModule } from './notifications/notifications.module';
import { EditModule } from './edit/edit.module';
import { SeparatePipe } from './_pipes/separate.pipe';

@NgModule({
   declarations: [AppComponent, NavComponent, SeparatePipe],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      PrimeModule,
      HomeModule,
      BloggersModule,
      AddModule,
      NotificationsModule,
      EditModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
