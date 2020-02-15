import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { IComponent } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: IComponent[] = [];

  constructor(
    private menuCtrl: MenuController,
    private dataService: DataService
  ) {
    this.dataService.getMenuOpts().subscribe( r => {
      this.components = r;
    });
  }

  ngOnInit() {
  }

  onToggleMenu() {
    this.menuCtrl.toggle();
  }

}