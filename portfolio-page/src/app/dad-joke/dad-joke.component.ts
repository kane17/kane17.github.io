import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DadJoke} from "./interface/dad-joke";

@Component({
  selector: 'app-dad-joke',
  templateUrl: './dad-joke.component.html',
  styleUrls: ['./dad-joke.component.scss']
})
export class DadJokeComponent {

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) {
  }

  displayDadJoke() {
    this.getDadJoke().subscribe(
        result => {this._snackBar.open(result.joke, "Haha!", {
          horizontalPosition: "center",
          verticalPosition: "top",
        })}
    );
  }

  private getDadJoke() {
    return this.http.get<DadJoke>("https://icanhazdadjoke.com/", {headers: new HttpHeaders("Accept: application/json")});
  }
}
