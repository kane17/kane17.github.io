import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-nationality-guessing',
  templateUrl: './nationality-guessing.component.html',
  styleUrls: ['./nationality-guessing.component.scss']
})
export class NationalityGuessingComponent {
  name: any;
  error: string = '';
  apiGuess: any = {};
  displayGuess: {german: string, probability: number, id: string}[] = [];
  countryCodes: {[key: string]: string} = {};
  displayedColumns: string[] = ['german', 'probability'];

  constructor(private http: HttpClient) {
    this.http.get<any>('../../assets/i18n/de.json').subscribe(data => {
      this.countryCodes = data['COUNTRY_CODES'] as {[key: string]: string};
    })
  }

  guessNationality() {
    fetch('https://api.nationalize.io/?name=' + this.name)
      .then(response => response.json())
      .then(data => {
        this.apiGuess = data
        this.displayResults();
      }).catch(err => {
      this.error = "City not found";
    })
  }

  private displayResults() {
    let apiCountries: [] = this.apiGuess['country']
    this.displayGuess = [];
    apiCountries.forEach(entry => {
      let upperCase: string = entry['country_id']
      let countryLower = upperCase.toLowerCase()
      this.displayGuess.push({id: countryLower, german: this.getGermanName(countryLower), probability: entry['probability']});
    })
  }

  getGermanName(country: string): string {
    if (this.countryCodes[country] == undefined) {
      return country;
    }
    return this.countryCodes[country];
  }
}
