import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable() 
export class PhotoService{
    private _basrUrl = "http://jsonplaceholder.typicode.com/albums/";

    constructor(private _http: Http){}

    getPhotos(album){
        return this._http.get(this._basrUrl + album + "/photos")
        .map(res => res.json());
    }
}