import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {DadJokeComponent} from './dad-joke/dad-joke.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AboutMeComponent } from './about-me/about-me.component';
import {MatTabsModule} from "@angular/material/tabs";
import { CryptoCapComponent } from './crypto-cap/crypto-cap.component';
import {RouterLink} from "@angular/router";
import {MatGridListModule} from "@angular/material/grid-list";
import { PokemonComponent } from './pokemon/pokemon.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        DadJokeComponent,
        AboutMeComponent,
        CryptoCapComponent,
        PokemonComponent
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTabsModule,
        RouterLink,
        MatGridListModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        NgOptimizedImage
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
