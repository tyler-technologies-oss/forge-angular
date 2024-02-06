import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ForgeModule } from '@tylertech/forge-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { HttpClientModule } from '@angular/common/http';

// Standalone components
import { DemoCardComponent } from './shared/components/demo-card/demo-card.component';

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
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, DemoCardComponent, ForgeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
