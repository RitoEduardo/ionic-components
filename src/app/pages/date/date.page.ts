import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {

  dateBirth: Date = new Date();

  customPickerOptions;

  customDate;

  constructor() { 
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( event ) => {
           console.log('Clicked Save!', event );
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  ngOnInit() {
  }

  changeInDate( event ){
    console.log('Ion change', event);
    console.log('Date', new Date(event.detail.value) );
  }

}
