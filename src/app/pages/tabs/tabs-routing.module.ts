import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        loadChildren: '../avatar/avatar.module#AvatarPageModule'
      },
      {
        path: 'speakers',
        loadChildren: '../list/list.module#ListPageModule'
      },
      {
        path: 'map',
        loadChildren: '../refresher/refresher.module#RefresherPageModule'
      },
      {
        path: 'about',
        loadChildren: '../grid/grid.module#GridPageModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
