import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = new Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      const newArr = Array(20);
      this.data.push( ...newArr );
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length > 150) {
        event.target.disabled = true;
      }
    }, 1000);
  }

}
