import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProxyComponentsModule } from '@tylertech/forge-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';

// Pages
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule, ProxyComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
