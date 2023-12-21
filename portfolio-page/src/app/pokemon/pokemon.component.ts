import {Component} from '@angular/core';
import {PokemonClient} from 'pokenode-ts';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  private pokeClient: PokemonClient;
  public name: string = "";
  public error: string = "";
  public image: SafeUrl | null = null;
  private pokemonNames: PokemonName[] = [];

  constructor(public _http: HttpClient, public sanitizer: DomSanitizer) {
    this.pokeClient = new PokemonClient();
    this._http.get<any>('assets/i18n/pokemon_kanto.json').subscribe(data => {
      this.pokemonNames = data['pokemon_kanto'];
    })
  }

  public getPokemon() {
    this.pokeClient.getPokemonByName(this.getEnglishName())
      .then((data) => {
        this.fetchImage(data.sprites.front_default);
      })
      .catch((error) => this.error = "Pokemon " + this.name + " not found");
  }

  private fetchImage(url: string | null) {
    if (url) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'image/png',
        }),
        responseType: 'blob'
      };
      // @ts-ignore
      this._http.get<Observable<Blob>>(url, httpOptions).subscribe((resp: any) => {
        const objectURL = window.URL.createObjectURL(resp);
        this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });
    } else {
      this.error = "Image Loading failed";
    }
  }

  private getEnglishName() {
    let englishName = this.name;
    this.pokemonNames.forEach((pokemonName) => {
      if (pokemonName.german_name === this.name) {
        englishName = pokemonName.name;
      }
    });
    return englishName;
  }
}

export interface PokemonName {
  name: string;
  german_name: string;
}
