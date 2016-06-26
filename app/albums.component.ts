import { Component, OnInit } from 'angular2/core'; 
import { HTTP_PROVIDERS } from 'angular2/http'; 
import { Observable } from 'rxjs/Observable';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumsService} from './services/albums.service' 

@Component({
    selector: 'albums',
    templateUrl: 'app/albums.component.html',
    providers: [AlbumsService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})

export class AlbumsComponent implements OnInit{
    isLoading = true;
    albums = [];

    constructor(private _albumService: AlbumsService){}

    ngOnInit(){
        this._albumService.getAlbums()
        .subscribe( albums => {
            this.isLoading = false;
            this.albums = albums;
        });
    }
}