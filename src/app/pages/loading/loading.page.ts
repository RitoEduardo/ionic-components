import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading;

  constructor( private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 700
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentLoadingPersonalize( message: string ) {
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  onLoading() {
    // this.presentLoadingWithOptions();
    this.presentLoadingPersonalize('render...');
    setTimeout( () => {
      this.loading.dismiss();
    }, 1500 );
  }

}
