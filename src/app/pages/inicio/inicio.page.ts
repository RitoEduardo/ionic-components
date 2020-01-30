import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: IComponent[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      route: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      route: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      route: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Buttons',
      route: '/buttons'
    },
    {
      icon: 'qr-scanner',
      name: 'Cards',
      route: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      route: '/check'
    },
    {
      icon: 'time',
      name: 'Date Time',
      route: '/date'
    },
    {
      icon: 'add-circle-outline',
      name: 'Ionfab',
      route: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid',
      route: '/grid'
    },
    {
      icon: 'logo-reddit',
      name: 'Infinite scroll',
      route: '/infinite-scroll'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}

interface IComponent{
  icon: string;
  name: string;
  route: string;
}
