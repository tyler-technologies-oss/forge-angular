import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ForgeModule } from '@tylertech/forge-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// Standalone components
import { DemoCardComponent } from './shared/components/demo-card/demo-card.component';

// Components
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';

// Pages
import { HomeComponent } from './views/home/home.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DemoCardComponent,
        ForgeModule,
        HomeComponent,
        SidenavComponent,
        HeaderComponent
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())],
    bootstrap: [AppComponent]
})
export class AppModule { }
