import {Component} from 'angular2/core';
import {NavbarComponent} from './navbar.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumsComponent} from './albums.component';
import {AlbumComponent} from './album.component';
import {ContactComponent} from './contact.component';

//Route Definitions
@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true },
    { path: '/album/:id', name: 'Album', component: AlbumComponent},
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Albums'] },
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/index.component.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }