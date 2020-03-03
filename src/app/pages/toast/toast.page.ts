import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async onClickSend() {
    console.log('Ready');
    const toast = await this.toastCtrl.create({
      color: 'dark',
      duration: 2000,
      message: 'Send Message <h1> HELLO </h1>'
    });

    await toast.present();
  }

  async onClickMessage() {
    console.log('Ready');
    const toast = await this.toastCtrl.create({
      color: 'dark',
      duration: 2000,
      message: 'Open Message'
    });

    await toast.present();
  }

  async onClickOpen() {
    console.log('Ready');
    const toast = await this.toastCtrl.create({
      color: 'dark',
      duration: 5000,
      cssClass: 'example-style-toast',
      message: `
        <ion-item>
          <ion-icon slot="start" name="send"></ion-icon>
          <ion-label> Menssage send succesful </ion-label>
        </ion-item>`
    });

    await toast.present();
  }
}
