import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComponent } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getMenuOpts() {
    return this.http.get<IComponent[]>('/assets/data/menu.json');
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

}
