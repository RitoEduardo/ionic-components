import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  status: false;

  data = [
    {
      name: 'label cheked one',
      color: 'warning',
      selected: false
    },
    {
      name: 'label cheked two',
      color: 'tertiary',
      selected: true
    },
    {
      name: 'label cheked tree',
      color: 'success',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick( check ){
    console.log( check )
  }

}
