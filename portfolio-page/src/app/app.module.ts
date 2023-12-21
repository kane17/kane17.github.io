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
import {AboutMeComponent} from './about-me/about-me.component';
import {CryptoCapComponent} from './crypto-cap/crypto-cap.component';
import {RouterLink} from "@angular/router";
import {MatGridListModule} from "@angular/material/grid-list";
import {PokemonComponent} from './pokemon/pokemon.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {NationalityGuessingComponent} from './nationality-guessing/nationality-guessing.component';
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {WidgetChooserComponent} from './widget-chooser/widget-chooser.component';
import {ProbabilityMultiplierPipe} from './probability-multiplier.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DadJokeComponent,
    AboutMeComponent,
    CryptoCapComponent,
    PokemonComponent,
    NationalityGuessingComponent,
    WidgetChooserComponent,
    ProbabilityMultiplierPipe
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterLink,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    NgOptimizedImage,
    MatListModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
