import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfacepagePage } from './interfacepage.page';

const routes: Routes = [
  {
    path: '',
    component: InterfacepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfacepagePageRoutingModule {}
