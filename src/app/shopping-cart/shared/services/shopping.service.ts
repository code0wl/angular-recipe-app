import { Album } from './../../../music/shared/models/album.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingService {
  albums: Array<Album> = [];
  constructor() { }
  addToCart(album) {
    this.albums.push(album);
  }
}
