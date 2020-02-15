import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums: any[];
  textSearch = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( data => {
      this.albums = data;
    });
  }

  onChangeSearch( e ) {
    console.log( e.detail.value );
    this.textSearch = e.detail.value;
  }

}
