import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
    private username: string;
    private client_id = 'ea5ded566efa9f4b77bc';
    private client_secret = '36bc03087120772ae3ac0be963982cad8960863d';

    constructor(private _http: Http) {
        console.log('GitHub Service Ready');
        this.username = 'mcswanson';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }

}