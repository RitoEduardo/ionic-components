import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slideOpts = {
    slidesPerView: 1,
    freeMode: false,
    spaceBetween: 0,
    // breakpoints: {
    //   540: {
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: 1,
    //   },
    //   1024: {
    //     slidesPerView: 4,
    //     spaceBetween: 1,
    //   },
    // }
  };
  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  onClick() {
    this.navCtrl.navigateBack('/');
  }

}
