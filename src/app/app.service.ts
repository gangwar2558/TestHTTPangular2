import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserData ,Objectdata } from './app.data';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class HTTPCallService {

    public _jsonurl = "./app/app.json";

    constructor(private _http: Http) {}

    getQuestions(): Observable<UserData>{
         return this._http.get("./app/app.json")
                         .map((data) => data.json())
    }
}