import { Component, OnInit } from 'angular2/core'; 
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteParams } from 'angular2/router' 

import { PhotoService } from './services/photo.service'

@Component({
    selector: 'photos',
    templateUrl: 'app/photo.component.html',
    providers: [HTTP_PROVIDERS, PhotoService],
})

export class AlbumComponent implements OnInit{
    isLoading = true;
    photos = [];

    constructor(
        private _photoService: PhotoService,
        private _routerParams: RouteParams,
    ){}

    ngOnInit(){
        this._photoService.getPhotos(this._routerParams.get("id"))
        .subscribe( photos => {
            this.isLoading = false;
            this.photos = photos;
        });
    }
}