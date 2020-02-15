import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentage: number;

  constructor() {
    this.porcentage = 0;
  }

  ngOnInit() {
  }

  onChangeRange( value: any ) {
    console.log( value.detail );
    this.porcentage = value.detail.value / 100;
  }

}
