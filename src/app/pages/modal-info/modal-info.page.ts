import { Component, OnInit, Input } from '@angular/core';
import { ModalController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() value1: number;
  @Input() value2: string;

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  onExitWithArgs(){
    this.modalCtrl.dismiss({
      value: this.value1,
      value2: this.value2
    });
  }

  onExitWithoutArgs(){
    this.modalCtrl.dismiss();
  }
}
