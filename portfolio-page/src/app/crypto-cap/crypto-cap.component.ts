import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-crypto-cap',
  templateUrl: './crypto-cap.component.html',
  styleUrls: ['./crypto-cap.component.scss']
})
export class CryptoCapComponent {

  public btcPrice: number = 0;
  public ethPrice: number = 0;
  public btcSupply: number = 0;
  public ethSupply: number = 0;

  constructor(private http: HttpClient) {
    this.getCryptoInfo();
  }

  public getCryptoInfo() {
    this.fetchApi().subscribe(resp => {
      this.btcPrice = resp["data"][0]["priceUsd"];
      this.ethPrice = resp["data"][1]["priceUsd"];
      this.btcSupply = resp["data"][0]["supply"];
      this.ethSupply = resp["data"][1]["supply"];
    })
  }

  private fetchApi(): Observable<any> {
    return this.http.get("https://api.coincap.io/v2/assets");
  }
}
