import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ForgeModule } from '@tylertech/forge-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DemoCardComponent } from './components/demo-card/demo-card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
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
