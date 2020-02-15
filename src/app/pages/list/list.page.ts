import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('listUsers', { static: true} ) listUsers: IonList;
  users: Observable<any>;

  constructor(
    private dataSerice: DataService
  ) { }

  ngOnInit() {
    this.users = this.dataSerice.getUsers();
  }

  favorite() {
    this.listUsers.closeSlidingItems();
  }

  share() {
    this.listUsers.closeSlidingItems();
  }

  delete() {
    this.listUsers.closeSlidingItems();
  }

}
