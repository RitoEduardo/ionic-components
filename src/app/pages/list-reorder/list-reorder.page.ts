import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  characters: string[] = ['Batman','Superman','Flash','Arrow','Green Lantern','Wonder Woman','Aquaman'];

  constructor() { }

  ngOnInit() {
  }

  reorder( event ){
    console.log( event );
    const itemMoved = this.characters.splice( event.detail.from, 1 )[0];
    this.characters.splice( event.detail.to, 0, itemMoved );
    event.detail.complete();
  }

  onSaved(){
    console.log( this.characters );
  }
}
