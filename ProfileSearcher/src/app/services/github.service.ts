import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '44a7c2b07f511211f2b6';
    private client_secret = '0bfe437213d69086fca667733f38322ec19ab7c8';

    constructor(private _http: Http){
        console.log("Github Service Ready....");
        this.username = 'bradtraversy';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
               .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
               .map(res => res.json());
    }

    updateUsername(username:string){
      this.username = username;
    }

}
