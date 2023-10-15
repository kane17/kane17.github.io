import {Component} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DadJoke} from "./interface/dad-joke";

@Component({
    selector: 'app-dad-joke',
    templateUrl: './dad-joke.component.html',
    styleUrls: ['./dad-joke.component.scss']
})
export class DadJokeComponent {

    public joke: string = "";

    constructor(private _snackBar: MatSnackBar, private http: HttpClient) {
        this.refreshDadJoke();
    }

    public refreshDadJoke() {
        this.getDadJoke().subscribe(resp => {
            this.joke = resp.joke;
        })
    }

    private getDadJoke() {
        return this.http.get<DadJoke>("https://icanhazdadjoke.com/", {headers: new HttpHeaders("Accept: application/json")});
    }
}
