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
