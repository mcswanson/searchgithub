import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
    private username: string;
    private client_id = 'add your client id here to access the github API';
    private client_secret = 'add your client secret key here to access the github API';

    constructor(private _http: Http) {
        console.log('GitHub Service Ready');
        this.username = 'add your github username here';
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