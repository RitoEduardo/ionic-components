import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild('MyIonSegment', {static: true }) segment: IonSegment;

  superHeroe: Observable<any>;
  publisher: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.segment.value = 'alls';
    this.superHeroe = this.dataService.getSuperHeros();
    this.publisher = '';
  }

  segmentChanged( event ) {
    const valSegment = event.detail.value;
    console.log( valSegment );
    if ( valSegment === 'friends') {
      this.publisher = 'DC Comics';
    } else if ( valSegment === 'enemies' ) {
      this.publisher = 'Marvel Comics';
    } else {
      this.publisher = '';
    }
  }

}
