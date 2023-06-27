import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DataModule} from "../data/data.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BodyComponent} from './body/body.component';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BodyComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DataModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatExpansionModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
