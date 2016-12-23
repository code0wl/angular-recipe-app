import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { AlbumsComponent } from './music/albums/albums.component';
import { AlbumComponent } from './music/album/album.component';
import { AlbumDetailComponent } from './music/album-detail/album-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AlbumsComponent,
    AlbumComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
